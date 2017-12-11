import { ActionReducerMap } from '@ngrx/store';
import * as fromMyBooks from './my-books.reducer';
import { createFeatureSelector } from '@ngrx/store/src/selector';

export interface BooksState {
  myBooks: fromMyBooks.MyBookState;
}

export const reducers: ActionReducerMap<BooksState> = {
  myBooks: fromMyBooks.reducer
};

export const getBooksState = createFeatureSelector<BooksState>('books');
