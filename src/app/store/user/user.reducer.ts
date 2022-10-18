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

export interface UserState {
  user:   User;
  error:  string;
  status: 'init' | 'loading' | 'loaded' | 'error';
}

export const initialState: UserState = {
  user:   new User,
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
);
