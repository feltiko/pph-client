import { StoreonModule } from 'storeon';

import { AuthorizedUser } from '../../api/types';

import { State, Events } from '../structure';

const userModule: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => {
    const user = (JSON.parse(localStorage.getItem('logged_user') as string) as AuthorizedUser) || undefined;

    return { user };
  });

  store.on('setUser', (state: State, payload: AuthorizedUser) => {
    if (payload) {
      localStorage.setItem('logged_user', JSON.stringify(payload));

      store.dispatch('login');
    } else {
      store.dispatch('logout');
    }

    return { user: payload };
  });
};

export { userModule };
