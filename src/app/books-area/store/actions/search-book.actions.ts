import { SearchBooks } from './../../models/search-books';
import { Action } from '@ngrx/store';
import { Volume } from '../../models/volume';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum SearchBooksActionTypes {
  SEARCH_BOOKS = '[SearchBooks] SEARCH_BOOKS',
  SEARCH_BOOKS_SUCCESS = '[SearchBooks] SEARCH_BOOKS_SUCCESS',
  SEARCH_BOOKS_FAIL = '[SearchBooks] SEARCH_BOOKS_FAIL'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class SearchBooksAction implements Action {
  readonly type = SearchBooksActionTypes.SEARCH_BOOKS;

  constructor(public payload: string) {}
}

export class SearchBooksSuccessAction implements Action {
  readonly type = SearchBooksActionTypes.SEARCH_BOOKS_SUCCESS;

  constructor(public payload: SearchBooks) {}
}

export class SearchBooksFailAction implements Action {
  readonly type = SearchBooksActionTypes.SEARCH_BOOKS_FAIL;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type SearchBooksActions =
  | SearchBooksAction
  | SearchBooksSuccessAction
  | SearchBooksFailAction;
