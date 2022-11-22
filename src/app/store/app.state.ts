import { AUTH_STATE_NAME } from './../auth/state/auth.selector';

import { AuthReducer } from './../auth/state/auth.reducer';
import { AuthState } from '../auth/state/auth.state';
import { SharedState } from './shared.state';
import { SharedReducer } from './shared.reducer';
import { SHARED_STATE_NAME } from './shared.selector';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};