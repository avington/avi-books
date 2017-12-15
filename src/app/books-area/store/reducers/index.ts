import { ActionReducerMap } from '@ngrx/store';
import * as fromMyBooks from './my-book-shelves.reducer';
import { createFeatureSelector } from '@ngrx/store/src/selector';

export interface BooksState {
  myBooks: fromMyBooks.MyBookShelvesState;
}

export const reducers: ActionReducerMap<BooksState> = {
  myBooks: fromMyBooks.reducer
};

export const getBooksState = createFeatureSelector<BooksState>('books');
