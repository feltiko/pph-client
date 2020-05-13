import { StoreonModule } from 'storeon';

import { State, Events } from '../structure';

const authModule: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => {
    /**
     * @TODO
     * check if auth token  is expired
     */
    const isLoggedIn = Boolean(JSON.parse(localStorage.getItem('logged_user') as string)) || undefined;

    return { isLoggedIn };
  });
  store.on('login', () => ({ isLoggedIn: true }));
  store.on('logout', () => {
    localStorage.removeItem('logged_user');

    return { isLoggedIn: false, user: undefined };
  });
};

export { authModule };
