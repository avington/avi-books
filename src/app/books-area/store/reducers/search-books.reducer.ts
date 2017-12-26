import { Volume } from './../../models/volume';
import * as fromActions from '../actions/search-book.actions';

export interface SearchBooksState {
  entities: Volume[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: SearchBooksState = {
  entities: [],
  loading: false,
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromActions.SearchBooksActions
): SearchBooksState {
  switch (action.type) {
    case fromActions.SearchBooksActionTypes.SEARCH_BOOKS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.SearchBooksActionTypes.SEARCH_BOOKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromActions.SearchBooksActionTypes.SEARCH_BOOKS_SUCCESS: {
      const books = action.payload.items;

      return {
        ...state,
        loading: false,
        loaded: true,
        entities: books
      };
    }

    default: {
      return state;
    }
  }
}

export const getSearchBookEntities = (state: SearchBooksState) =>
  state.entities;
export const getSearchBookLoaded = (state: SearchBooksState) => state.loaded;
export const getSearchBookLoading = (state: SearchBooksState) => state.loading;
