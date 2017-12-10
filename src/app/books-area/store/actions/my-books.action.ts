import { BookVolume } from './../models/book-volume';
import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum MyBooksActionTypes {
  LOAD_MY_BOOKS = '[MyBooks] LOAD_MY_BOOKS',
  LOAD_MY_BOOKS_SUCCESS = '[MyBooks] LOAD_MY_BOOKS_SUCCESS',
  LOAD_MY_BOOKS_FAILED = '[MyBooks] LOAD_MY_BOOKS_FAILED'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadMyBooks implements Action {
  readonly type = MyBooksActionTypes.LOAD_MY_BOOKS;

  public payload: any;
}
export class LoadMyBooksSuccess implements Action {
  readonly type = MyBooksActionTypes.LOAD_MY_BOOKS_SUCCESS;

  constructor(public payload: BookVolume[]) {}
}

export class LoadMyBooksFailed implements Action {
  readonly type = MyBooksActionTypes.LOAD_MY_BOOKS_FAILED;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type MyBooksActions =
  | LoadMyBooks
  | LoadMyBooksSuccess
  | LoadMyBooksFailed;
