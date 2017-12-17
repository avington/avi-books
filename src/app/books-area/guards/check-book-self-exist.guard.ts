import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';

// store
import * as fromStore from '../store';
import { BookShelf } from '../models/book-shelf';

@Injectable()
export class CheckBookSelfExistGuard implements CanActivate {
  constructor(private store: Store<fromStore.BooksState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkStore().pipe(
      switchMap(() => {
        console.log(next.params);
        const id = parseInt(next.params.bookShelfId, 10);
        return this.hasBookSelf(id);
      })
    );
  }

  hasBookSelf(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getMyBookShelvesEntitiesFromState)
      .pipe(
        map((entities: { [key: number]: BookShelf }) => !!entities[id]),
        take(1)
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getMyBookShelvesLoadedFromState).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadMyBookShelves());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
