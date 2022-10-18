import { createAction, props } from '@ngrx/store';
import { httpResponse } from 'src/app/models/http-response.model';
import { User, Credentials } from 'src/app/models/user.model';

//#region Get User
export const getUser = createAction(
  '[User] Get User',
  props<{credentials: Credentials}>()
);

export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<{user: User}>()
);

export const getUserError = createAction(
  '[User] Get User Error',
  props<{response: httpResponse}>()
);
//#endregion

//#region Register User
export const register = createAction(
  '[User] Register User',
  props<{ newUser: User }>()
)

export const registerSuccess = createAction(
  '[User] Register Success',
  props<{ newUser: User }>()
);

export const registerError = createAction(
  '[httpResponse] Register Error',
  props<{ error: httpResponse }>()
);
//#endregion
