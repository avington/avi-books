import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import * as accountStore from '../../account-area/store';
import {Store} from '@ngrx/store';
import {AuthHelperService} from '../../global-providers/auth-helper.service';
import {Token} from '../models/token';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CheckIsAuthenticatedGuard implements CanActivate {

  constructor(private store: Store<accountStore.AccountState>,
              private helperService: AuthHelperService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.select(accountStore.getTokenFromState).pipe(
      switchMap((token: Token) => {
        return of(this.helperService.isAuthenticated(token));
      })
    );

  }
}
