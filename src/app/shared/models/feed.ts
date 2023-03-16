export interface HomeFeed {
    author: string,
    content: string,
    description: number,
    publishedAt: string,
    source: {
        id: string,
        name: string
    },
    title: string,
    url: string,
    urlToImage: string,
    collapse:boolean
}