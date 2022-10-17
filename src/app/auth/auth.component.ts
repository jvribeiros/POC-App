import { Component } from '@angular/core';
import { User } from '../models/user.model';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  username: string = '';
  password: string = '';
  keepConnected: boolean = false;

  SignIn(username: string, password: string, keepConnected: boolean)
  {
    console.log("INPUT USERNAME: ", this.username);
    console.log("INPUT PASSWORD: ", this.password);
    console.log("KEEP CONNECTED INPUT: ", this.keepConnected);
  };

  CreateUser()
  {
    console.log("CREATE USER CALLED!")
  }
}