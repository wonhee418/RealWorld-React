export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [string];
  createdAt: string;
  updatedAt: string;
  favorited: false;
  favoritesCount: boolean;
  author: {
    username: string;
    bio: null | string;
    image: string;
    following: false;
  };
}
