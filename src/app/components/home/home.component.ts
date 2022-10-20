import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Asset } from '../../models/asset.model';
import { selectUserInfo, selectAssetsList } from '../../store/user/user.selectors';
import { deleteAsset } from '../../store/user/user.actions';
import { AppState } from '../../store/app.state';
import { User } from '../../models/user.model';
import { getAssetsByUser } from '../../store/user/user.actions';
import * as signalR from "@aspnet/signalr";
import { HttpClient, HttpParams } from '@angular/common/http';
import { NotificationModel } from 'src/app/models/notificationModel';

@Component({
  selector: 'home-component',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
  constructor(
    private store:         Store<AppState>,
    private route:         Router,
    private http:          HttpClient,
    ){ }

  assetsList$ = this.store.select(selectAssetsList)
  user$ = this.store.select(selectUserInfo);
  
  private hubConnection!: signalR.HubConnection;

  notifications: any[] = [];
  notification: NotificationModel = {
    name:    '',
    message: '',
  }

  message: string = '';
  user: User = new User;
  dataSource: Asset[] = [];
  displayedColumns: string[] = ['name', 'symbol', 'paidPrice', 'currentPrice', 'gain', 'realGain', 'action'];

  ngOnInit() {
    
    this.store.select(selectUserInfo).subscribe(userInfo => { 
      this.user = userInfo
    });

    this.store.dispatch(getAssetsByUser({ id: this.user.id }))

    this.store.select(selectAssetsList).subscribe(list => {
      this.dataSource = list
    });

    this.startConnection();
    this.addNotificationListener();
  }

  AddData()
  {
    this.route.navigate(["registerasset"])
  }

  DeleteData(asset: Asset)
  {
    this.store.dispatch(deleteAsset({ asset }));
  }

  SignOut()
  {
    this.route.navigate(["/"])
  }

  SendNotification()
  {
    this.startHttpRequest();
  }
  
  private startHttpRequest = () => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const params = new HttpParams()
            .set("name", this.user.name)
            .set("message", this.message);

    this.http.get('http://localhost:5000/api/Notification/NotificationBroadcast',
    { headers: headers, params: params}
    )
      .subscribe(res => {
        return res;
      })
  }

  public startConnection(){
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/notification')
    .build();

    this.hubConnection.start()
    .then(() => console.log("Connection started"))
    .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addNotificationListener(){
    this.hubConnection.on('broadcastnotification', (data) => {
      this.notifications.push(data);
    });
  }
}