export interface IVideosResp {
  kind: string
  etag: string
  items: {
    etag: string
    kind: string
    id: string
    contentDetails: {
      duration: string
      dimension: string
      definition: string
      caption: string
      licensedContent: boolean
      contentRating: {}
      projection: string
    }
    statistics: {
      viewCount: string
      likeCount: string
      favoriteCount: string
      commentCount: string
    }
  }[]
}
