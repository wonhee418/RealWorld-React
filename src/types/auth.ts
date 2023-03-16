export interface Auth {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export interface User {
  user: {
    email: string;
    password: string;
  };
}
