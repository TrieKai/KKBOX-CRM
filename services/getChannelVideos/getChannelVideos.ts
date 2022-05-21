import axios, { AxiosResponse } from 'axios'
import { YT_SEARCH_ENDPOINT } from 'assets/constant'
import { IChannelVideosResp } from './channelVideos.type'

const GetChannelVideos = (
  channelId: string,
  maxResults: number,
  pageToken: string = '',
  order: string = 'date'
): Promise<AxiosResponse<IChannelVideosResp>> => {
  return axios.get(
    `${YT_SEARCH_ENDPOINT}?part=snippet&channelId=${channelId}&order=${order}&maxResults=${maxResults}&pageToken=${pageToken}&key=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNELS_LIST_KEY}`
  )
}

export default GetChannelVideos
