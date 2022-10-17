import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
  export class AssetsService {
  
    constructor(
      private http: HttpClient,
      private route: Router
    ) { }
  
    public GetAssets(user: User): Promise<any> {
      return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json'
          };
        this.http.get(`https://localhost:5001/api/Assets/Get/${user.id}`, {headers}).subscribe(
          (response: any) => {
            resolve(response);
          },
          (err: HttpErrorResponse) => {
            reject(err.error);
          }
        )
      })
    }
  
  
    public CreateAsset(user: User): Promise<any> {
      return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json'
          };
        this.http.post("https://localhost:5001/api/Assets/Post", user, {headers})
        .subscribe(
          (response: any) => {
            resolve(response);
          },
          (err: HttpErrorResponse) => {
            reject(err.error)
          }
          )
        });
    }
  }
  