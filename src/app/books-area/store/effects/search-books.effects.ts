import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as fromActions from '../actions/search-book.actions';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import * as _ from 'lodash';
import { BooksHttpService } from '../../services/books-http.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SearchBooksEffects {
  @Effect()
  searchBooks$: Observable<Action> = this.actions$
    .ofType(fromActions.SearchBooksActionTypes.SEARCH_BOOKS)
    .pipe(
      map((action: fromActions.SearchBooksAction) => {
        return action.payload;
      }),
      filter((term: string) => {
        return term.length > 2;
      }),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        return this.booksHttp
          .searchBooks(term, 5, 'lite')
          .pipe(
            map(
              searchResult =>
                new fromActions.SearchBooksSuccessAction(searchResult)
            ),
            catchError(err => of(new fromActions.SearchBooksFailAction(err)))
          );
      })
    );

  constructor(private actions$: Actions, private booksHttp: BooksHttpService) {}
}
