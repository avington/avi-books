import * as fromRoot from '../../../store';
import * as fromBookSelvesSelectors from './my-book-shelves.selectors';
import {createSelector} from '@ngrx/store';
import {BookShelf} from '../../models/book-shelf';

export const getSelectedBookShelfFromShelves = createSelector(
  fromBookSelvesSelectors.getMyBookShelvesEntitiesFromState,
  fromRoot.getRouterState,
  (entities, router): BookShelf => {
    return router.state && entities[router.state.params.bookSelfId];
  }
)

