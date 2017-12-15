import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import * as fromStore from '../store';
import {Store} from '@ngrx/store';
import {catchError, filter, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CheckMyShelvesGuard implements CanActivate {

  constructor(private store: Store<fromStore.BooksState>) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getMyBookShelvesLoadedFromState).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadMyBookShelves());
        }
      }),
      filter(loaded => loaded)
    );
  }
}
