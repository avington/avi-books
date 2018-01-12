import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import * as fromActions from '../actions/search-book.actions';
import * as fromRootActions from '../../../store/actions';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import {BooksHttpService} from '../../services/books-http.service';
import {of} from 'rxjs/observable/of';
import {SearchRequest} from '../../models/search-request';
import {SearchBooks} from '../../models/search-books';

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

  @Effect()
  advanceSearchBooks: Observable<Action> = this.actions$
    .ofType(fromActions.SearchBooksActionTypes.ADV_SEARCH_BOOKS)
    .pipe(
      map((action: fromActions.AdvancedSearchAction) => {
        return action.payload;
      }),
      switchMap((payload: SearchRequest) => {
        return this.booksHttp.advancedSearch(payload)
          .pipe(
            map((response: SearchBooks) => {

              response = {
                ...response,
                startIndex: payload.startIndex,
                maxResults: payload.maxResults
              };

              return new fromActions.AdvancedSearchSuccessAction(response);
            }),
            catchError(err => of(new fromActions.AdvancedSearchFailAction(err)))
          );
      })
    );


  @Effect()
  goToSearchResults: Observable<Action> = this.actions$
    .ofType(fromActions.SearchBooksActionTypes.ADV_SEARCH_BOOKS_SUCCESS)
    .pipe(
      map((searchResults) => {
        return new fromRootActions.GoAction({path: ['/books/search-results']});
      })
    );

  constructor(private actions$: Actions, private booksHttp: BooksHttpService) {
  }
}
