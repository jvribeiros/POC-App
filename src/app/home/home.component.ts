import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Asset } from '../models/asset.model';
import { selectUserInfo, selectAssetsList } from '../store/user/user.selectors';
import { deleteAsset } from '../store/user/user.actions';
import { AppState } from '../store/app.state';
import { User } from '../models/user.model';
import { getAssetsByUser } from '../store/user-assets/userAssets.actions';

@Component({
  selector: 'home-component',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private route: Router
    ){ }

  assetsList$ = this.store.select(selectAssetsList)
  user$ = this.store.select(selectUserInfo);
  user: User = new User;

  dataSource: Asset[] = [];
  displayedColumns: string[] = ['name', 'symbol', 'paidPrice', 'currentPrice', 'gain', 'realGain', 'action'];

  ngOnInit() {
    
    this.user$ = this.store.select(selectUserInfo);
    this.assetsList$ = this.store.select(selectAssetsList);

    this.store.select(selectUserInfo).subscribe(userInfo => { 
      this.user = userInfo
    });

    this.store.select(selectAssetsList).subscribe(list => { 
      this.dataSource = list
    });

    this.store.dispatch(getAssetsByUser({ id: this.user.id }))
  }

  AddData()
  {
    this.store.select(selectAssetsList).subscribe(list => { 
      this.dataSource = list
    });

    this.route.navigate(["registerasset"])
  }

  DeleteData(asset: Asset)
  {
    this.store.dispatch(deleteAsset({ asset }));
  }
}