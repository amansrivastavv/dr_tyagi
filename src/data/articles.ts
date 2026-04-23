import articlesData from "./articles.json";

export interface Article {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  content: string[];
}

export const articles: Article[] = articlesData;
