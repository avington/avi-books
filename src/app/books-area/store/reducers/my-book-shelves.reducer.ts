import * as fromActions from '../actions';
import { BookShelf } from '../../models/book-shelf';

export interface MyBookState {
  entities: { [id: number]: BookShelf };
  loading: boolean;
  loaded: boolean;
}

export const initialState: MyBookState = {
  entities: {},
  loading: false,
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromActions.MyBooksActions
): MyBookState {
  switch (action.type) {
    case fromActions.MyBooksActionTypes.LOAD_MY_BOOKS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromActions.MyBooksActionTypes.LOAD_MY_BOOKS_SUCCESS: {
      const books = action.payload.items;

      const entities = books.reduce(
        // tslint:disable-next-line:no-shadowed-variable
        (entities: { [id: number]: BookShelf }, book: BookShelf) => {
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

export const getMyBooksEntities = (state: MyBookState) => state.entities;
export const getMyBooksLoaded = (state: MyBookState) => state.loaded;
export const getMyBooksLoading = (state: MyBookState) => state.loading;
