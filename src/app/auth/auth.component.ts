import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, Credentials } from '../models/user.model';
import { getUser } from '../store/user/user.actions';

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  username: string = '';
  password: string = '';
  credentials: Credentials = new Credentials;

  constructor(private store: Store) {}

  SignIn()
  {
    this.credentials.email = this.username;
    this.credentials.password = this.password

    this.store.dispatch(getUser({credentials: this.credentials}));

    this.credentials = new Credentials;
  };
}