import {Action} from '@ngrx/store';
import {BookShelf} from '../../models/book-shelf';
import {BookShelfDetail} from '../../models/book-shelf-detail';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum BookShelfActionTypes {
  LOAD_BOOKS_SHELF = '[BookShelf] LOAD_BOOKS_SHELF',
  LOAD_BOOK_SHELF_SUCCESS = '[BookShelf] LOAD_BOOK_SHELF_SUCCESS',
  LOAD_BOOK_SHELF_FAIL = '[BookShelf] LOAD_BOOK_SHELF_FAIL'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadBookShelfActon implements Action {
  readonly type = BookShelfActionTypes.LOAD_BOOKS_SHELF;

  constructor(public payload: BookShelf) {
  }
}

export class LoadBookShelfSuccessAction implements Action {
  readonly type = BookShelfActionTypes.LOAD_BOOK_SHELF_SUCCESS;

  constructor(public payload: BookShelfDetail) {
  }
}

export class LoadBookShelfFailAction implements Action {
  readonly type = BookShelfActionTypes.LOAD_BOOK_SHELF_FAIL;

  constructor(public payload: any) {
  }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BookShelfActions
  = LoadBookShelfActon
  | LoadBookShelfSuccessAction
  | LoadBookShelfFailAction;
