import { createAction, props } from '@ngrx/store';
import { httpResponse } from 'src/app/models/http-response.model';
import { User, Credentials } from 'src/app/models/user.model';
import { Asset } from 'src/app/models/asset.model';

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

export const getAssetsByUser = createAction(
  '[number] Get Assets Request',
  props<{ id: number }>()
);

export const insertAsset = createAction(
  '[Asset] Insert Asset',
  props<{ asset: Asset }>()
);

export const deleteAsset = createAction(
  '[Asset] Delete Asset',
  props<{ asset: Asset }>()
);
