export type NewsItem = {
  title: String,
  description: String,
  url: String,
  urlToImage: String
}

export type NewsResponse = {
  articles: Array<NewsItem>
}

export type NewsItemProps = {
  article: NewsItem
}
export type NewListProps = {
  category: String
}
