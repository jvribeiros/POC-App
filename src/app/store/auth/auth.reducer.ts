import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model'
import {
    authRequest,
    authSuccess,
    authError,
    logOut,
} from './auth.actions';

export const initialState = {
    token: '',
    isAuthenticated: false,
    isLoading: false,
}

export const userReducer = createReducer(
  initialState,
  on(authRequest, (state) =>
  {
    return {
        ...state,
        loadingStatus: true
    }
  }),
  on(authSuccess, (state, response) =>
  {
    return {
        ...state,
        token: response.authenticationResponse,
        isAuthenticated: true,
        loadingStatus: false
    }
  }),
  on(authError, (state) =>
  {
    return {
        ...state,
        user: {},
        loadingStatus: false
    }
  }),
  on(logOut, (state) =>
  {
    return {
        ...state,
        token: '',
        loadingStatus: true
    }
  }),
  on(registerSuccess, (state, newUser) =>
  {
    return {
        ...state,
        user: newUser,
        isLoading: false,
    }
  }),
  on(registerError, (state) =>
  {
    return {
        ...state,
        user: {},
        isLoading: false,
    }
  }),
);
