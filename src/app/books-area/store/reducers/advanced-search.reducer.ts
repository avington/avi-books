import {Volume} from './../../models/volume';
import * as fromActions from '../actions/search-book.actions';


export interface AdvancedSearchBooksState {
  entity: {
    startIndex?: number;
    totalItems?: number;
    maxResults?: number;
    q?: string;
    filter?: string;
    libraryRestrict?: boolean;
    showPreorders?: boolean;
    printType?: string;
    orderBy?: string;
    items?: Volume[]
  };
  loading: boolean;
  loaded: boolean;
}

export const initialState: AdvancedSearchBooksState = {
  entity: {},
  loading: false,
  loaded: false
};

export function reducer(state = initialState,
                        action: fromActions.SearchBooksActions): AdvancedSearchBooksState {
  switch (action.type) {
    case fromActions.SearchBooksActionTypes.ADV_SEARCH_BOOKS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.SearchBooksActionTypes.ADV_SEARCH_BOOKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromActions.SearchBooksActionTypes.ADV_SEARCH_BOOKS_SUCCESS: {
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

export const getAdvancedSearchBookEntities = (state: AdvancedSearchBooksState) =>
  state.entity;

export const getAdvancedSearchBookLoaded = (state: AdvancedSearchBooksState) => state.loaded;

export const getAdvancedSearchBookLoading = (state: AdvancedSearchBooksState) => state.loading;
