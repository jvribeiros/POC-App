import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import { register } from '../../store/user/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  newUser: User = new User;

  constructor(
    private store: Store,
    private router: Router) {}

  CreateUser()
  {
    this.newUser.email = this.email;
    this.newUser.name = this.name;
    this.newUser.password = this.password;

    this.store.dispatch(register({ newUser: this.newUser }));
    
    this.newUser = new User;
  }
}