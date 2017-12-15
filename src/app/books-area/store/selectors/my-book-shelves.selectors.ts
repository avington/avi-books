import {
  getMyBookShelvesEntities,
  getMyBookShelvesLoaded,
  getMyBookShelvesLoading
} from '../reducers/my-book-shelves.reducer';
import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as _ from 'lodash';

export const getMyBooksState = createSelector(
  fromFeature.getBooksState,
  (state: fromFeature.BooksState) => {
    return _.get(state, 'myBooks');
  }
);

export const getMyBookShelvesEntitiesFromState = createSelector(
  getMyBooksState,
  getMyBookShelvesEntities,
);

export const getMyBookShelvesLoadedFromState = createSelector(
  getMyBooksState,
  getMyBookShelvesLoaded
);

export const getMyBookShelvesLoadingFromState = createSelector(
  getMyBooksState,
  getMyBookShelvesLoading
);

export const getMyBookShelvesList = createSelector(
  getMyBookShelvesEntitiesFromState, (entities) => {
    return Object.keys(entities).map(key => entities[key]);
  }
);
