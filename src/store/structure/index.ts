import { AuthorizedUser } from '../../api/types';

export interface Events {
  isLoggedIn: boolean;
  setUser: AuthorizedUser;
  login: undefined;
  logout: undefined;
}

export interface State {
  isLoggedIn: boolean;
  user: AuthorizedUser | undefined;
}
