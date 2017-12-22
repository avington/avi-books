import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AppState} from '../../models/app-state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Profile} from '../../account-area/models/profile';
import * as profileActions from '../../account-area/store/actions/profile-actions';
import * as fromAccountStore from './../../account-area/store';
import {GoogleAuthService} from '../../global-providers/google-auth.service';
import {WindowReferenceService} from '../../global-providers/window-reference.service';
import {AuthHelperService} from '../../global-providers/auth-helper.service';
import {Token} from '../../account-area/models/token';

@Component({
  selector: 'avi-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '0',
      })),
      state('out', style({
        height: '*',
      })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ])
  ]
})
export class DefaultHeaderComponent implements OnInit {

  profile$: Observable<Profile>;


  expandState: string;

  constructor(private store: Store<AppState>,
              private auth: GoogleAuthService,
              private winRef: WindowReferenceService,
              private authHelper: AuthHelperService) {
    this.profile$ = this.store.select(s => s.profile);
  }

  isLoggedIn: boolean;

  ngOnInit() {
    this.expandState = 'in';
    this.getProfile();
  }

  toggleMobileMenu() {
    this.expandState = this.expandState === 'out' ? 'in' : 'out';
  }

  private getProfile(): any {
    this.store.dispatch(new profileActions.LoadProfileAction());
    this.store.select(fromAccountStore.getTokenFromState).subscribe((token: Token) => {
      this.isLoggedIn = this.authHelper.isAuthenticated(token);
    });
  }


  buildAuthUrl() {
    const _window = this.winRef.nativeWindow;
    const url = this.auth.buildUrl('home');
    _window.location.replace(url);
  }
}
