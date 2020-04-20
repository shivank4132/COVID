export interface GlobalDataSummary {
    country ?: string,
    confirmed ?: number,
    recovered ?: number,
    active ?: number,
    deaths ?: number
}

export interface NewsData {
    status: string;
    totalResults: number;
    articles: Article[];
  }

  export interface Article {
    author: null | string;
    title: string;
    description: string;
    url: string;
    urlToImage: null | string;
    publishedAt: string;
    content: null | string;
  }