import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    register,
    registerSuccess,
    registerError,
    getUser,
    getUserSuccess,
    getUserError
} from './user.actions';
import { UserService } from '../../services/user.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap((action) =>
        from(this.userService.GetUser(action.credentials)).pipe(
          map((user) => getUserSuccess({ user: user })),
          catchError((error) => of(getUserError(error)))
        )
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap((action) =>
        from(this.userService.RegisterUser(action.newUser)).pipe(
          map((user) => registerSuccess({ newUser: user })),
          catchError((error) => of(registerError(error)))
        )
      )
    )
  );
}