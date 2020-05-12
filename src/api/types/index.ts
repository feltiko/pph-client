export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  title: string;
  short_description: string;
  avatar: {
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
  category: Category;
};

export type ErrorMessages = {
  messages: Error[];
};

export type Error = {
  id: string;
  message: string;
};

export type RequestAuthorizedUser = {
  message?: ErrorMessages[];
  jwt: string;
  user: {
    username: string;
    email: string;
  };
};

export type AuthorizedUser = {
  jwt: string | undefined;
  username: string | undefined;
  email: string | undefined;
};

export type RegisterUser = {
  username: string;
  email: string;
  password: string;
};

export type LoginUser = {
  identifier: string;
  password: string;
};
