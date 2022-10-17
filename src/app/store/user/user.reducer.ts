import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model'
import {
    register,
    registerSuccess,
    registerError,
    getUser,
    getUserSuccess,
    getUserError
} from './user.actions';

export const initialState = {
    user: {},
    isLoading: false,
}

export const userReducer = createReducer(
  initialState,
  on(getUser, (state) =>
  {
    return {
        ...state,
        loadingStatus: true
    }
  }),
  on(getUserSuccess, (state, user) =>
  {
    return {
        ...state,
        user: user,
        loadingStatus: false
    }
  }),
  on(getUserError, (state) =>
  {
    return {
        ...state,
        user: {},
        loadingStatus: false
    }
  }),
  on(register, (state) =>
  {
    return {
        ...state,
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
