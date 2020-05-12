import { StoreonModule } from 'storeon';

import { AuthorizedUser } from '../../api/types';

import { State, Events } from '../structure';

const userModule: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({ user: undefined }));
  store.on('setUser', (state: State, payload: AuthorizedUser) => ({ user: payload }));
};

export { userModule };
