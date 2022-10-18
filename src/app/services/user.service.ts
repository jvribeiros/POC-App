import { Router } from '@angular/router';
import { Credentials, User } from '../models/user.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
  export class UserService {
  
    constructor(
      private http: HttpClient,
      private route: Router
    ) { }
  
    public GetUser(credentials: Credentials): Promise<any> {
      return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json',
          };

        const params = new HttpParams()
            .set("username", credentials.email)
            .set("password", credentials.password);

        this.http.get(`https://localhost:5001/api/User/Authenticate`,
        {
            headers: headers,
            params: params,
        })
        .subscribe(
          (response: any) => {
            this.route.navigate(["home"])
            resolve(response);
          },
          (err: HttpErrorResponse) => {
            reject(err.error);
          }
        )
      })
    }

    public RegisterUser(newUser: User): Promise<any> {
      return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json',
          };

        this.http.post(`https://localhost:5001/api/User/RegisterUser`, newUser)
        .subscribe(
          (response: any) => {
            this.route.navigate(["home"])
            resolve(response);
          },
          (err: HttpErrorResponse) => {
            this.route.navigate(["home"])
            reject(err.error);
          }
        )
      })
    }
  }
  