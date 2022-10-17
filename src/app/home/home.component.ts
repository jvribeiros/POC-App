import {Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { Asset } from '../models/asset.model';
import { User } from '../models/user.model';
import * as AssetsActions from '../store/assets/assets.actions';
import * as AssetsReducers from '../store/assets/assets.reducer';

const ELEMENT_DATA: Asset[] = [
  {name: 'Bitcoin',  symbol: 'BTC',  paidPrice: 1,   currentPrice: 1.7},
  {name: 'Ethereum', symbol: 'ETH',  paidPrice: 2.3, currentPrice: 1.5},
  {name: 'Cardano',  symbol: 'ADA',  paidPrice: 1,   currentPrice: 3.1},
  {name: 'Nano',     symbol: 'Nano', paidPrice: 2,   currentPrice: 2.7},
]

@Component({
  selector: 'home-component',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
  newAsset: Asset = new Asset;
  user: User = new User;

  constructor(
    private store: Store,
    private assetState: Store<AssetsReducers.State>,
  ){ }

  ngOnInit() {
    this.store.dispatch(AssetsActions.getAssetsByUser({ id: this.user.id}));
  }

  displayedColumns: string[] = ['name', 'symbol', 'paidPrice', 'currentPrice', 'gain'];
  dataSource = ELEMENT_DATA; 

  AddData()
  {
    this.store.dispatch(AssetsActions.insertAsset({ asset: this.newAsset }));
    console.log("STORE: ", this.store);
  }
}