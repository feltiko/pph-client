import { createClient } from 'react-fetching-library';

import { requestHostInterceptor } from './interceptors';

import { CURRENT_API_URL } from '../config';

export const Client = createClient({ requestInterceptors: [requestHostInterceptor(CURRENT_API_URL)] });
