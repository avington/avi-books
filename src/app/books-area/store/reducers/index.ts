import { ActionReducerMap } from '@ngrx/store';
import * as fromMyBooks from './my-book-shelves.reducer';
import * as fromMyBookShelf from './my-book-shelf.reducer';
import { createFeatureSelector } from '@ngrx/store/src/selector';

export interface BooksState {
  myBooks: fromMyBooks.MyBookShelvesState;
  myBookShelf: fromMyBookShelf.MyBookShelfState;
}

export const reducers: ActionReducerMap<BooksState> = {
  myBooks: fromMyBooks.reducer,
  myBookShelf: fromMyBookShelf.reducer
};

export const getBooksState = createFeatureSelector<BooksState>('books');
