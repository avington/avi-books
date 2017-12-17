import {
  getShelfEntities,
  getShelfLoaded,
  getShelfLoading
} from './../reducers/my-book-shelf.reducer';
import { reducers } from './../../../store/reducers/index';
import * as fromRoot from '../../../store';
import * as fromBookSelvesSelectors from './my-book-shelves.selectors';
import * as fromFeature from '../reducers';
import { createSelector } from '@ngrx/store';
import { BookShelf } from '../../models/book-shelf';
import { getMyBooksState } from '../index';
import * as _ from 'lodash';

export const getSelectedBookShelfFromShelves = createSelector(
  fromBookSelvesSelectors.getMyBookShelvesEntitiesFromState,
  fromRoot.getRouterState,
  (entities, router): BookShelf => {
    return router.state && entities[router.state.params.bookShelfId];
  }
);

export const getMyBookShelfState = createSelector(
  fromFeature.getBooksState,
  state => {
    return _.get(state, 'myBookShelf');
  }
);

export const getMyBookShelfEntity = createSelector(
  getMyBookShelfState,
  getShelfEntities
);
export const getMyBookShelfLoaded = createSelector(
  getMyBookShelfState,
  getShelfLoaded
);
export const getMyBookShelfLoading = createSelector(
  getMyBookShelfState,
  getShelfLoading
);

export const getMyBookShelfVolumesList = createSelector(
  getMyBookShelfEntity,
  entities => {
    if (!entities) {
      return null;
    }
    return Object.keys(entities).map(key => entities[key]);
  }
);
