export interface Articles {
  articles: [
    {
      slug: string;
      title: string;
      description: string;
      body: string;
      tagList: string[];
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
  ];
  articlesCount: 0;
}
export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
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

export interface Comments {
  comments: [
    {
      id: number;
      createdAt: string;
      updatedAt: string;
      body: string;
      author: {
        username: string;
        bio: string;
        image: string;
        following: boolean;
      };
    }
  ];
}

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface CommentTpye {
  comment: {
    body: string;
  };
}
