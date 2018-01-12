import {AdvancedSearchAction, SearchBooksAction, SearchBooksActionTypes} from './search-book.actions';
import {SearchRequest} from '../../models/search-request';

describe('search-books', () => {
  describe('SearchBooksAction', () => {
    it('Should create an action', () => {
      const action = new SearchBooksAction('term');
      expect(action.payload).toEqual('term');
      expect(action.type).toEqual('[SearchBooks] SEARCH_BOOKS');
    });
  });
});

describe('advanced-search-books', () => {
  describe('AdvancedSearchAction', () => {
    it('Should create an an action', () => {

      const request: SearchRequest = {
        q: 'test'
      };

      const action = new AdvancedSearchAction(request);
      expect(action.type).toBe(SearchBooksActionTypes.ADV_SEARCH_BOOKS);
      expect(action.payload.q).toBe('test');
    });
  });
});
