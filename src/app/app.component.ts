import {Component} from '@angular/core';
import * as fromAccountStore from './account-area/store';
import {Store} from '@ngrx/store';
import {LocalStorage} from 'ngx-webstorage';
import {Token} from './account-area/models/token';


@Component({
  selector: 'avi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @LocalStorage()
  token: Token;

  constructor(private store: Store<fromAccountStore.AccountState>) {

    this.store.select(fromAccountStore.getTokenFromState)
      .subscribe(state => this.token = {...state});

  }
}

