import { createStoreon } from 'storeon';

import { State, Events } from './structure';

import { userModule } from './models/user';
import { authModule } from './models/auth';

export const store = createStoreon<State, Events>([userModule, authModule]);
