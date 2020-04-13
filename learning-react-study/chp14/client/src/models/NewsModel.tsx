export type Article = {
  title: String,
  description: String,
  url: String,
  urlToImage: String
}

export type ArticlesResponse = {
  articles: Array<Article>
}

export type NewsItemProps = {
  article: Article
}
export type NewListProps = {
  category: String
}
