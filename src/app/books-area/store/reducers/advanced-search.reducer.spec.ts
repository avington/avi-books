import * as fromAdvancsedSearchReducer from './advanced-search.reducer';
import {AdvancedSearchSuccessAction} from '../actions';
import {SearchBooks} from '../../models/search-books';

describe('advanced-search Reducers', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const {initialState} = fromAdvancsedSearchReducer;
      const action = {} as any;
      const state = fromAdvancsedSearchReducer.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });
  describe('advanced search success action', () => {

    it('should return loaded true and entity on success', () => {

      const payload: SearchBooks = {
        startIndex: 0,
        totalItems: 5000,
        maxResults: 20,
        kind: 'kind',
        items: [
          {
            id: '1',
            volumeInfo: {
              authors: ['Joe']
            }
          },
          {
            id: '2',
            volumeInfo: {
              authors: ['Ted']
            }
          }
        ]

      };
      const action = new AdvancedSearchSuccessAction(payload);
      const state = fromAdvancsedSearchReducer.reducer(fromAdvancsedSearchReducer.initialState, action);
      expect(state.loaded).toBeTruthy();
      expect(state.loading).toBeFalsy();
      expect(state.entity.startIndex).toBe(0);
      expect(state.entity.totalItems).toBe(5000);
      expect(state.entity.maxResults).toBe(20);
      expect(state.entity.items[1].id).toBe('2');
      expect(state.entity.pageIndex).toBe(0);
    });

    it('should correctly set the page size with startIndex is 20', () => {
        const payload: SearchBooks = {
          startIndex: 20,
          totalItems: 5000,
          maxResults: 20,
          kind: 'kind',
          items: [
            {
              id: '1',
              volumeInfo: {
                authors: ['Joe']
              }
            },
            {
              id: '2',
              volumeInfo: {
                authors: ['Ted']
              }
            }
          ]

        };
        const action = new AdvancedSearchSuccessAction(payload);
        const state = fromAdvancsedSearchReducer.reducer(fromAdvancsedSearchReducer.initialState, action);
        expect(state.loaded).toBeTruthy();
        expect(state.loading).toBeFalsy();
        expect(state.entity.startIndex).toBe(20);
        expect(state.entity.pageIndex).toBe(1);
      }
    );
  });
});
