import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import * as fromActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {BooksHttpService} from '../../services/books-http.service';
import {BookVolume} from '../../models/book-volume';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MyBooksEffects {


  @Effect()
  myBooks$: Observable<Action> = this.actions$.ofType(
    fromActions.MyBooksActionTypes.LOAD_MY_BOOKS
  ).pipe(
    switchMap(() => {
      return this.bookHttpService.getMyLibraryBooksSelves()
        .pipe(
          map(response => new fromActions.LoadMyBooksSuccess(response as BookVolume[])),
          catchError(error => of(new fromActions.LoadMyBooksFailed(error)))
        );
    })
  );

  constructor(private actions$: Actions,
              private bookHttpService: BooksHttpService) {
  }
}
