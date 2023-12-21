export interface ArticleType {
  createdAt: string;
  excerpt: string;
  id: string;
  image: {
    url: string;
  };
  language: string;
  slug: string;
  title: string;
  author: AuthorType;
  description: {
    text: string;
    raw: [];
  };
}

export interface AuthorType {
  name: string;
  avatar: {
    url: string;
  };
}
