import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import * as fromActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {BooksHttpService} from '../../services/books-http.service';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MyBooksEffects {


  @Effect()
  myBooks$: Observable<Action> = this.actions$.ofType(
    fromActions.MyBooksActionTypes.LOAD_MY_BOOKSHELVES
  ).pipe(
    switchMap(() => {
      return this.bookHttpService.getMyLibraryBooksSelves()
        .pipe(
          map(response => new fromActions.LoadMyBookShelvesSuccess(response)),
          catchError(error => of(new fromActions.LoadMyBookShelvesFailed(error)))
        );
    })
  );

  constructor(private actions$: Actions,
              private bookHttpService: BooksHttpService) {
  }
}
