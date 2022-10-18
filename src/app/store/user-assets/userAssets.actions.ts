import { createAction, props } from '@ngrx/store';
import { Asset } from 'src/app/models/asset.model';

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
