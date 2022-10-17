import { createAction, props } from '@ngrx/store';
import { httpResponse } from 'src/app/models/http-response.model';
import { Asset } from 'src/app/models/asset.model';

export const getAssetsByUser = createAction(
  '[number] Get Assets Request',
  props<{ id: number }>()
);

export const getAssetsByUserSuccess = createAction(
  '[Asset[]] Get Assets Success',
  props<{ assetsList: Asset[] }>()
);

export const getAssetsByUserError = createAction(
  '[httpResponse] Get Assets Error',
  props<{ response: httpResponse }>()
);

export const insertAsset = createAction(
  '[Asset] Insert Asset',
  props<{ asset: Asset }>()
);

export const insertAssetSuccess = createAction(
  '[Asset[]] Insert Asset Success',
  props<{ assetsList: Asset[] }>()
);

export const insertAssetError = createAction(
  '[httpResponse] Insert Asset Error',
  props<{ response: httpResponse }>()
);
