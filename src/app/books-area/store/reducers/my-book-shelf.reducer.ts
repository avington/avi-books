import { Volume } from './../../models/volume';
import { MyBookShelfState } from './my-book-shelf.reducer';
import { BookShelfDetail } from '../../models/book-shelf-detail';
import * as fromActions from '../actions';

export interface MyBookShelfState {
  entities: { [id: string]: Volume };
  loading: boolean;
  loaded: boolean;
}

export const initialState: MyBookShelfState = {
  entities: null,
  loading: false,
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromActions.BookShelfActions
): MyBookShelfState {
  switch (action.type) {
    case fromActions.BookShelfActionTypes.LOAD_BOOKS_SHELF: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.BookShelfActionTypes.LOAD_BOOK_SHELF_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromActions.BookShelfActionTypes.LOAD_BOOK_SHELF_SUCCESS: {
      const books = action.payload.items;

      const entities = books.reduce(
        // tslint:disable-next-line:no-shadowed-variable
        (entities: { [id: string]: Volume }, book: Volume) => {
          return {
            ...entities,
            [book.id]: book
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    default: {
      return state;
    }
  }
}

export const getShelfEntities = (state: MyBookShelfState) => state.entities;
export const getShelfLoaded = (state: MyBookShelfState) => state.loaded;
export const getShelfLoading = (state: MyBookShelfState) => state.loading;
