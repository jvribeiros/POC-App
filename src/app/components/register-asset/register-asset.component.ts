import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Asset } from '../../models/asset.model';
import {insertAsset} from '../../store/user/user.actions';
import { selectUserInfo } from '../../store/user/user.selectors';
import { AppState } from '../../store/app.state';
import { OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'register-asset',
  templateUrl: './register-asset.component.html',
  styleUrls: ['./register-asset.component.scss']
})

export class RegisterAssetComponent implements OnInit {
  asset: Asset = new Asset;
  quantity: number = 0;
  paidPrice: number = 0;
  user: User = new User;

  user$ = this.store.select(selectUserInfo);

  constructor( private store: Store<AppState>, private route: Router ){ }

  AVAILABLE_DATA: Asset[] = [
    {id: 1, name: 'Bitcoin',  symbol: 'BTC',  paidPrice: 0, quantity: 0,  currentPrice: 19602, userId: 0},
    {id: 2, name: 'Ethereum', symbol: 'ETH',  paidPrice: 0, quantity: 0,  currentPrice: 1331.90, userId: 0},
    {id: 3, name: 'Cardano',  symbol: 'ADA',  paidPrice: 0, quantity: 0,  currentPrice: 0.37, userId: 0},
    {id: 4, name: 'Nano',     symbol: 'Nano', paidPrice: 0, quantity: 0,  currentPrice: 0.78, userId: 0},
  ]

  ngOnInit() {
    this.user$ = this.store.select(selectUserInfo);

    this.store.select(selectUserInfo).subscribe(userInfo => { 
      this.user = userInfo
    });
  }

  CreateUserAsset()
  {
    this.asset.paidPrice = this.paidPrice;
    this.asset.quantity = this.quantity;
    this.asset.userId = this.user.id;

    this.store.dispatch(insertAsset({ asset: this.asset }));

    this.route.navigate(["home"]);
  }
}