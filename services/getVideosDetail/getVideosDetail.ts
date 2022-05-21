import axios, { AxiosResponse } from 'axios'
import { YT_VIDEOS_ENDPOINT } from 'assets/constant'
import { IVideosResp } from './videosDetail.type'

const GetVideosDetail = (
  idList: string[]
): Promise<AxiosResponse<IVideosResp>> => {
  const idStr = idList.reduce((acc, cur) => (acc += `id=${cur}&`), '')
  return axios.get(
    `${YT_VIDEOS_ENDPOINT}?part=contentDetails&part=statistics&${idStr}key=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNELS_LIST_KEY}`
  )
}

export default GetVideosDetail
