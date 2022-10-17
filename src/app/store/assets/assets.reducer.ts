import { createReducer, on } from '@ngrx/store';
import { Asset } from '../../models/asset.model'
import {
    getAssetsByUser,
    getAssetsByUserSuccess,
    getAssetsByUserError,
    insertAsset,
    insertAssetSuccess,
    insertAssetError,
} from './assets.actions';

export interface State {
  assetsList: Asset[],
  isLoading: boolean
}

export const initialState: State = {
    assetsList: [],
    isLoading: false,
}

export const userReducer = createReducer(
  initialState,
  on(getAssetsByUser, (state) =>
  {
    return {
        ...state,
        isLoading: true
    }
  }),

  on(getAssetsByUserSuccess, (state, response) =>
  {
    return {
        ...state,
        assetsList: response.assetsList,
        isLoading: false
    }
  }),

  on(getAssetsByUserError, (state) =>
  {
    return {
        ...state,
        user: {},
        isLoading: false
    }
  }),

  on(insertAsset, (state) =>
  {
    return {
        ...state,
        isLoading: true
    }
  }),

  on(insertAssetSuccess, (state, response) =>
  {
    return {
        ...state,
        assetsList: response.assetsList,
        isLoading: false
    }
  }),
  
  on(insertAssetError, (state) =>
  {
    return {
        ...state,
        isLoading: false
    }
  }),
);
