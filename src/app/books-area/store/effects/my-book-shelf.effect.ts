import { BooksHttpService } from './../../services/books-http.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as fromActions from '../actions';
import { BookShelf } from '../../models/book-shelf';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MyBookShelfEffects {
  @Effect()
  myBookSgelf$: Observable<Action> = this.actions$
    .ofType(fromActions.BookShelfActionTypes.LOAD_BOOKS_SHELF)
    .pipe(
      map((action: fromActions.LoadBookShelfActon) => action.payload),
      switchMap((bookShelf: BookShelf) => {
        return this.bookHttp
          .getSelfLink(`${bookShelf.selfLink}/volumes`)
          .pipe(
            map(
              bookShelfDefail =>
                new fromActions.LoadBookShelfSuccessAction(bookShelfDefail)
            ),
            catchError(error =>
              of(new fromActions.LoadBookShelfFailAction(error))
            )
          );
      })
    );

  constructor(private actions$: Actions, private bookHttp: BooksHttpService) {}
}
