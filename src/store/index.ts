import { createStoreon } from 'storeon';

import { State, Events } from './structure';

import { userModule } from './models/user';

export const store = createStoreon<State, Events>([userModule]);
