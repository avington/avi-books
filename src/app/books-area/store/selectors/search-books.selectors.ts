import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as _ from 'lodash';

export const getSearchBooksState = createSelector(
  fromFeature.getBooksState,
  (state: fromFeature.BooksState) => {
    return _.get(state, 'searchBooks');
  }
);
