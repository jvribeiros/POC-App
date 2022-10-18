import { Router } from '@angular/router';
import { Asset } from '../models/asset.model';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
  export class UserAssetsService {
  
    constructor(
      private http: HttpClient,
      private route: Router
    ) { }
  
    public GetUserAssets(userId: number): Promise<any> {
      return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json',
          };

        this.http.get(`https://localhost:5001/api/UserAssets/GetUserAssets/${userId}`,
        { headers: headers })
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

    public RegisterUserAsset(newAsset: Asset): Promise<any> {
      return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json',
          };

        this.http.post(`https://localhost:5001/api/User/RegisterUser`, newAsset)
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
  