import { createReducer, on } from '@ngrx/store';
import { Asset } from '../../models/asset.model'
import {
    getAssetsByUser,
    insertAsset,
    deleteAsset,
} from './userAssets.actions';

const ELEMENT_DATA: Asset[] = [
  {id: 1, name: 'Bitcoin',  symbol: 'BTC',  paidPrice: 1,   quantity: 0, currentPrice: 1.7, userId: 0},
  {id: 2, name: 'Ethereum', symbol: 'ETH',  paidPrice: 2.3, quantity: 0, currentPrice: 1.5, userId: 2},
  {id: 3, name: 'Cardano',  symbol: 'ADA',  paidPrice: 1,   quantity: 0, currentPrice: 3.1, userId: 1},
  {id: 4, name: 'Nano',     symbol: 'Nano', paidPrice: 2,   quantity: 0, currentPrice: 2.7, userId: 1},
]

export interface AssetState {
  assetsList: Asset[];
}

export const initialState: AssetState = {
  assetsList: ELEMENT_DATA,
}

export const assetReducer = createReducer(
  initialState,
  on(getAssetsByUser, (state, { id }) =>
  {
    const response: any = {
      ...state,
      assetsList: state.assetsList.filter((currentAsset) => currentAsset.userId == id)
    }
    return response;
  }),

  on(insertAsset, (state, { asset }) =>
  {
    const response: any = {
      ...state,
      assetsList: [...state.assetsList, asset]
    }
    return response;
  }),

  on(deleteAsset, (state, { asset }) =>
  {
    return {
        ...state,
        assetsList: state.assetsList.filter((currentAsset) => currentAsset != asset)
    }
  }),
);
