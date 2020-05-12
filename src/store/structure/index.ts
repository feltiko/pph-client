import { AuthorizedUser } from '../../api/types';

export interface Events {
  setUser: AuthorizedUser;
}

export interface State {
  user: AuthorizedUser | undefined;
}
