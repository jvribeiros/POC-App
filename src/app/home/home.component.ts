import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Asset } from '../models/asset.model';
import { selectUserInfo } from '../store/user/user.selectors';
import { selectAssetsList } from '../store/user-assets/userAssets.selectors';
import { AppState } from '../store/app.state';
import { User } from '../models/user.model';
import { getAssetsByUser } from '../store/user-assets/userAssets.actions';

@Component({
  selector: 'home-component',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
  constructor( private store: Store<AppState>, private route: Router ){ }

  assetsList$ = this.store.select(selectAssetsList)
  user$ = this.store.select(selectUserInfo);
  user: User = new User;

  dataSource: Asset[] = [];
  displayedColumns: string[] = ['name', 'symbol', 'paidPrice', 'currentPrice', 'gain', 'action'];

  ngOnInit() {
    
    this.user$ = this.store.select(selectUserInfo);
    this.assetsList$ = this.store.select(selectAssetsList);
    
    this.store.dispatch(getAssetsByUser({ id: 1 }))

    // this.dataSource = this.store.select(selectAssetsList).subscribe(list => { return list })
  }

  AddData()
  {
    console.log(this.user);
    this.route.navigate(["registerasset"])
  }
}