import { createAction, props } from '@ngrx/store';
import { httpResponse } from 'src/app/models/http-response.model';
import { User } from 'src/app/models/user.model';

export const register = createAction(
  '[User] Register User',
  props<{ User: User }>()
)

export const registerSuccess = createAction(
  '[httpResponse] Register Success',
  props<{ registerResponse: httpResponse }>()
);

export const registerError = createAction(
  '[httpResponse] Register Error',
  props<{ error: httpResponse }>()
);

export const getUser = createAction(
  '[User] Get User'
);

export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<{user: User}>()
);

export const getUserError = createAction(
  '[User] Get User Error',
  props<{user: User}>()
);
