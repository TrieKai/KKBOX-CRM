import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { NextPage } from 'next'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, IconButton, useTheme, Modal, Typography } from '@mui/material'
import GetChannelVideos from 'services/getChannelVideos'
import { ColorModeContext } from 'contexts/colorModeContext'
import GetVideosDetail from 'services/getVideosDetail'
import {
  ConvertDurationToTimestamp,
  ConvertTimestampToString
} from 'utils/convertTime'
import { KKBOX_CHANNEL_ID, DARK } from 'assets/constant'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

interface IVideo {
  id: string
  thumbnail: {
    url: string
    videoId: string
  }
  title: string
  duration: string
  publishedAt: string
  viewCount: number
  likeCount: number
  commentCount: number
}

const rowHeight = 90
const pageSize = 10
const headerHeight = 64
const columns: GridColDef[] = [
  {
    field: 'thumbnail',
    headerName: '截圖',
    sortable: false,
    width: 150,
    headerAlign: 'center',
    align: 'center',
    renderCell: params => (
      <a
        href={`https://www.youtube.com/watch?v=${params.value.videoId}`}
        target='_blank'
      >
        <img src={params.value.url} alt='thumbnail' />
      </a>
    )
  },
  {
    field: 'title',
    headerName: '標題',
    sortable: false,
    minWidth: 300,
    headerAlign: 'center',
    align: 'center',
    renderCell: params => (
      <Box
        title={params.value}
        sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {params.value}
      </Box>
    )
  },
  {
    field: 'duration',
    headerName: '時間長度',
    type: 'string',
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'publishedAt',
    headerName: '發布日期',
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'viewCount',
    headerName: '觀看次數',
    type: 'number',
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'likeCount',
    headerName: '被喜歡的次數',
    type: 'number',
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'commentCount',
    headerName: '留言次數',
    type: 'number',
    headerAlign: 'center',
    align: 'center'
  }
]

const Home: NextPage = (): JSX.Element => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const [videoList, setVideoList] = useState<IVideo[][]>([]) // data
  const [totalCount, setTotalCount] = useState<number>(0) // total videos count
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0) // current page number
  const [popupWindow, setPopupWindow] = useState<boolean>(false)
  const nextPageToken = useRef<string>('')
  const currMaxPage = useRef<number>(0) // currnet max page number

  const getChannelVideos = useCallback(
    async (pageToken?: string): Promise<void> => {
      setIsLoading(true)
      try {
        const { data: videosOverview } = await GetChannelVideos(
          KKBOX_CHANNEL_ID,
          pageSize,
          pageToken
        )
        setTotalCount(videosOverview.pageInfo.totalResults)
        const idList = videosOverview.items.map(item => item.id.videoId) // get videos id list
        const { data: videosDetail } = await GetVideosDetail(idList)

        // arrange new video list
        const videoList: IVideo[] = videosOverview.items.map(videoOverview => {
          const videoDetail = videosDetail.items.find(
            videoDetail => videoDetail.id === videoOverview.id.videoId
          )
          return {
            id: videoOverview.id.videoId,
            thumbnail: {
              url: videoOverview.snippet.thumbnails.default.url,
              videoId: videoOverview.id.videoId
            },
            title: videoOverview.snippet.title,
            duration: ConvertTimestampToString(
              ConvertDurationToTimestamp(videoDetail.contentDetails.duration)
            ),
            publishedAt: videoOverview.snippet.publishedAt,
            viewCount: Number(videoDetail.statistics.viewCount),
            likeCount: Number(videoDetail.statistics.likeCount),
            commentCount: Number(videoDetail.statistics.commentCount)
          }
        })
        setVideoList(list => [...list, videoList])
        nextPageToken.current = videosOverview.nextPageToken // set new nextPageToken
      } catch (error) {
        setPopupWindow(true) // show error page
      }
      setIsLoading(false)
    },
    []
  )

  const handlePageChange = useCallback(
    (page: number): void => {
      setPage(page)
      // if reach current max page number, then fetch new API
      if (page > currMaxPage.current) {
        getChannelVideos(nextPageToken.current)
        currMaxPage.current++
      }
    },
    [getChannelVideos]
  )

  useEffect(() => {
    getChannelVideos()
  }, [getChannelVideos])

  return (
    <>
      {/* Main content start */}
      <Box sx={{ width: '100%', height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            width: '100%',
            height: `${headerHeight}px`
          }}
        >
          <Box>
            <h3>KKBOX 後台系統</h3>
          </Box>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color='inherit'
          >
            {theme.palette.mode === DARK ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
        <Box sx={{ width: '100%', height: `calc(100% - ${headerHeight}px)` }}>
          <DataGrid
            rows={videoList[page] ?? []}
            rowCount={totalCount}
            rowHeight={rowHeight}
            columns={columns}
            pageSize={pageSize}
            page={page}
            loading={isLoading}
            rowsPerPageOptions={[pageSize]}
            pagination
            paginationMode='server'
            onPageChange={handlePageChange}
          />
        </Box>
      </Box>
      {/* Main content end */}
      {/* Popup window start */}
      <Modal
        open={popupWindow}
        onClose={() => setPopupWindow(false)}
        aria-labelledby='modal-modal-title'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            發生不可預期的錯誤！
          </Typography>
        </Box>
      </Modal>
      {/* Popup window end */}
    </>
  )
}

export default Home
