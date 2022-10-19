import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { Asset } from 'src/app/models/asset.model';
import {
    register,
    registerSuccess,
    registerError,
    getUser,
    getUserSuccess,
    getUserError,
    getAssetsByUser,
    insertAsset,
    deleteAsset,
} from './user.actions';

const ELEMENT_DATA: Asset[] = [
  {id: 1, name: 'Bitcoin',  symbol: 'BTC',  paidPrice: 19507.90,   quantity: 0.3562, currentPrice: 19407.90, userId: 1},
  {id: 2, name: 'Ethereum', symbol: 'ETH',  paidPrice: 1207.82, quantity: 1.3, currentPrice: 1307.82, userId: 2},
  {id: 3, name: 'Cardano',  symbol: 'ADA',  paidPrice: 1,   quantity: 589, currentPrice: 0.37, userId: 1},
  {id: 4, name: 'Nano',     symbol: 'Nano', paidPrice: 0.76,   quantity: 478, currentPrice: 0.77, userId: 1},
  {id: 5, name: 'Nano',     symbol: 'Nano', paidPrice: 0.61,   quantity: 300, currentPrice: 0.77, userId: 2},
  {id: 6, name: 'Nano',     symbol: 'Nano', paidPrice: 0.80,   quantity: 250, currentPrice: 0.77, userId: 2},
]

export interface UserState {
  user:   User;
  assetsList: Asset[];
  error:  string;
  status: 'init' | 'loading' | 'loaded' | 'error';
}

export const initialState: UserState = {
  user:   new User,
  assetsList: ELEMENT_DATA,
  error:  '',
  status: 'init',
}

export const userReducer = createReducer(
  initialState,
  on(getUser, (state) => {return {...state, status: 'loading'}}),

  on(getUserSuccess, (state, { user }) =>
  {
    return {
        ...state,
        user: user,
        status: 'loaded'
    }
  }),

  on(getUserError, (state, { response }) =>
  {
    return {
        ...state,
        user: new User,
        error: response.message,
        status: 'error'
    }
  }),

  on(register, (state) => { return { ...state, status: 'loading' } }),

  on(registerSuccess, (state, { newUser }) =>
  {
    return {
        ...state,
        user: newUser,
        status: 'loaded',
    }
  }),
  
  on(registerError, (state, { error }) =>
  {
    return {
        ...state,
        user: new User,
        error: error.message,
        status: 'error',
    }
  }),

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
