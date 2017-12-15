import {BookShelfDetail} from '../../models/book-shelf-detail';
import * as fromActions from '../actions';

export interface MyBookShelfState {
  entity: BookShelfDetail;
  loading: boolean;
  loaded: boolean;
}

export const initialState: MyBookShelfState = {
  entity: {},
  loading: false,
  loaded: false
};

export function reducer(state = initialState,
                        action: fromActions.BookShelfActions): MyBookShelfState {
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
      const entity = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        entity
      };
    }

    default: {
      return state;
    }
  }
}

