import {Component, OnInit} from '@angular/core';
import {Location, HashLocationStrategy, LocationStrategy} from '@angular/common';
import * as fromStore from './../../store';
import {Store} from '@ngrx/store';
import {Token} from '../../models/token';

@Component({
  selector: 'avi-oath-callback-page',
  templateUrl: './oath-callback-page.component.html',
  styleUrls: ['./oath-callback-page.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class OathCallbackPageComponent implements OnInit {

  constructor(private location: Location,
              private store: Store<fromStore.AccountState>) {
  }

  ngOnInit() {

    const hash: any = {};

    this.location
      .path(true)
      .replace(/^#\/?/, '')
      .split('&')
      .forEach((kv) => {
        const spl = kv.indexOf('=');
        if (spl !== -1) {
          hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl + 1));
        }
      });

    const payload: Token = {
      accessToken: hash['access_token'],
      expiresIn: hash['expires_in'],
      timeCreated: new Date(),
      scope: hash['scope'],
      tokenType: hash['token_type']
    };

    this.store.dispatch(new fromStore.UpdateUserTokenAction(payload));

  }

}
