export interface IChannelVideosResp {
  kind: string
  etag: string
  items: {
    etag: string
    id: {
      kind: string
      videoId: string
    }
    snippet: {
      channelId: string
      channelTitle: string
      title: string
      description: string
      liveBroadcastContent: string
      publishTime: string
      publishedAt: string
      thumbnails: {
        default: IThumbnail
        medium: IThumbnail
        high: IThumbnail
      }
    }
  }[]
  nextPageToken: string
  pageInfo: {
    resultsPerPage: number
    totalResults: number
  }
  regionCode: string
}

interface IThumbnail {
  url: string
  width: number
  height: number
}
