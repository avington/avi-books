import {SearchBooksState} from './../reducers/search-books.reducer';
import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as _ from 'lodash';
import {getAdvancedSearchBookEntities} from '../reducers/advanced-search.reducer';

export const getSearchBooksState = createSelector(
  fromFeature.getBooksState,
  (state: fromFeature.BooksState) => {
    return _.get(state, 'searchBooks');
  }
);

export const getAdvancedSearchBooksState = createSelector(
  fromFeature.getBooksState,
  (state: fromFeature.BooksState) => {
    return _.get(state, 'advancedSearchBooks');
  }
);

export const getSearchBooksEntities = createSelector(
  getSearchBooksState,
  (state: SearchBooksState) => {
    return Object.keys(state.entities).map(key => state.entities[key]);
  }
);

export const getAdvancedSearchEntitiesFromState = createSelector(
  getAdvancedSearchBooksState,
  getAdvancedSearchBookEntities
);

export const getAdvancedSearchItemsFromEntitiyState = createSelector(
  getAdvancedSearchEntitiesFromState,
  (entity) => {
    return entity.items;
  }
)

