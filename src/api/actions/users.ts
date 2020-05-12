import { Action } from 'react-fetching-library';

import { RegisterUser, LoginUser, RequestAuthorizedUser } from '../types';

export const register = (user: RegisterUser): Action<RequestAuthorizedUser> => ({
  method: 'POST',
  endpoint: '/auth/local/register',
  body: {
    ...user,
  },
});

export const login = (user: LoginUser): Action<RequestAuthorizedUser> => ({
  method: 'POST',
  endpoint: '/auth/local',
  body: {
    ...user,
  },
});
