import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC-App';

  constructor(private route: Router ){ }

  SignOut()
  {
    this.route.navigate(["/"]);
  }
}
