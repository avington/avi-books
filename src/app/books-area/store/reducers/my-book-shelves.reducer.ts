import * as fromActions from '../actions';
import {BookShelf} from '../../models/book-shelf';

export interface MyBookShelvesState {
  entities: { [id: number]: BookShelf };
  loading: boolean;
  loaded: boolean;
}

export const initialState: MyBookShelvesState = {
  entities: {},
  loading: false,
  loaded: false
};

export function reducer(state = initialState,
                        action: fromActions.MyBookShelvesActions): MyBookShelvesState {
  switch (action.type) {

    case fromActions.MyBooksActionTypes.LOAD_MY_BOOKSHELVES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.MyBooksActionTypes.LOAD_MY_BOOKSHELVES_FAILED: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }


    case fromActions.MyBooksActionTypes.LOAD_MY_BOOKSHELVES_SUCCESS: {
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

export const getMyBookShelvesEntities = (state: MyBookShelvesState) => state.entities;
export const getMyBookShelvesLoaded = (state: MyBookShelvesState) => state.loaded;
export const getMyBookShelvesLoading = (state: MyBookShelvesState) => state ? state.loading : false;
