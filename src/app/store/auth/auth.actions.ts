import { createAction, props } from '@ngrx/store';
import { httpResponse } from 'src/app/models/http-response.model';
import { Credentials } from 'src/app/models/user.model';

export const authRequest = createAction(
  '[httpResponse] Authentication Request',
  props<{ authentication: Credentials }>()
);

export const authSuccess = createAction(
  '[string] Authentication Success',
  props<{ authenticationResponse: string }>()
);

export const authError = createAction(
  '[httpResponse] Authentication Error',
  props<{ authenticationError: httpResponse }>()
);

export const logOut = createAction(
  '[void] Logout User'
)
