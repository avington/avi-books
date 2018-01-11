import * as fromSearchBooks from './search-books.reducer';
import * as fromActions from '../actions';
import { MyBookShelves } from '../../models/my-book-shelves';

describe('search-books Reducers', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const {initialState} = fromSearchBooks;
      const action: any = {};
      const state = fromSearchBooks.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
    describe('Search action dispatched', () => {
      it('should change loading to true', () => {
        const { initialState } = fromSearchBooks;
        const action = new fromActions.SearchBooksAction('search');
        const state = fromSearchBooks.reducer(initialState, action);
        const empty = {};

        expect(state.loading).toBe(true);
        expect(state.loaded).toBe(false);
        expect(state.entities).toEqual([]);
      });
    });
  });
});
