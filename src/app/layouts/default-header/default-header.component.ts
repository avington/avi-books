import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AppState} from '../../models/app-state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Profile} from '../../account-area/models/profile';
import * as profileActions from '../../account-area/store/actions/profile-actions';
import {GoogleAuthService} from '../../global-providers/google-auth.service';
import {WindowReferenceService} from '../../global-providers/window-reference.service';

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
              private winRef: WindowReferenceService) {
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
  }


  buildAuthUrl() {
    const _window = this.winRef.nativeWindow;
    const url = this.auth.buildUrl('home');
    _window.location.replace(url);
  }
}
