import { Action } from '@ngrx/store';
import {BookVolume} from '../../models/book-volume';
import { MyBookShelves } from '../../models/my-book-shelves';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum MyBooksActionTypes {
  LOAD_MY_BOOKS = '[MyBooks] LOAD_MY_BOOKSHELVES',
  LOAD_MY_BOOKS_SUCCESS = '[MyBooks] LOAD_MY_BOOKSHELVES_SUCCESS',
  LOAD_MY_BOOKS_FAILED = '[MyBooks] LOAD_MY_BOOKSHELVES_FAILED'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadMyBookShelves implements Action {
  readonly type = MyBooksActionTypes.LOAD_MY_BOOKS;

  public payload: any;
}
export class LoadMyBookShelvesSuccess implements Action {
  readonly type = MyBooksActionTypes.LOAD_MY_BOOKS_SUCCESS;

  constructor(public payload: MyBookShelves) {}
}

export class LoadMyBookShelvesFailed implements Action {
  readonly type = MyBooksActionTypes.LOAD_MY_BOOKS_FAILED;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MyBooksActions =
  | LoadMyBookShelves
  | LoadMyBookShelvesSuccess
  | LoadMyBookShelvesFailed;
