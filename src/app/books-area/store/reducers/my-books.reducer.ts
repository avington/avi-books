import { BookVolume } from './../models/book-volume';
import * as fromActions from '../actions';

export interface MyBookState {
  entities: { [id: number]: BookVolume };
  loading: boolean;
  loaded: boolean;
}

const initialState: MyBookState = {
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
      const books = action.payload;

      const entities = books.reduce(
        // tslint:disable-next-line:no-shadowed-variable
        (entities: { [id: number]: BookVolume }, book: BookVolume) => {
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
