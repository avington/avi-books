import * as fromActions from '../actions/search-book.actions';
import {Volume} from '../../models/volume';

export interface SearchBooksState {
  entities: { [id: string]: Volume };
  loading: boolean;
  loaded: boolean;
}

export const initialState: SearchBooksState = {
  entities: {},
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: fromActions.SearchBooksActions): SearchBooksState {

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
        loaded: false,
      };
    }

    case fromActions.SearchBooksActionTypes.SEARCH_BOOKS_SUCCESS: {

      // TODO: finish book success reducer
      const entities = action.payload as any;

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

export const getSearchBookEntities = ((state: SearchBooksState) => state.entities);
export const getSearchBookLoaded = ((state: SearchBooksState) => state.loaded);
export const getSearchBookLoading = ((state: SearchBooksState) => state.loading);
