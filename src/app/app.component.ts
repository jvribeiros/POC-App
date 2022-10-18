import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from './store/user/user.reducer';
import { selectUserInfo } from './store/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC-App';

  constructor(private store: Store) {}

}
