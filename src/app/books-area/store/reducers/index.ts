import { ActionReducerMap } from '@ngrx/store';
import * as fromMyBooks from './my-book-shelves.reducer';
import * as fromMyBookShelf from './my-book-shelf.reducer';
import * as fromSearchBooks from './search-books.reducer';
import * as fromAdvancedSearchBooks from './advanced-search.reducer';
import { createFeatureSelector } from '@ngrx/store/src/selector';

export interface BooksState {
  myBooks: fromMyBooks.MyBookShelvesState;
  myBookShelf: fromMyBookShelf.MyBookShelfState;
  searchBooks: fromSearchBooks.SearchBooksState;
  advancedSearchBooks: fromAdvancedSearchBooks.AdvancedSearchBooksState
}

export const reducers: ActionReducerMap<BooksState> = {
  myBooks: fromMyBooks.reducer,
  myBookShelf: fromMyBookShelf.reducer,
  searchBooks: fromSearchBooks.reducer,
  advancedSearchBooks: fromAdvancedSearchBooks.reducer
};

export const getBooksState = createFeatureSelector<BooksState>('books');
