import {SearchBooksAction} from './search-book.actions';

describe('search-books', () => {
  describe('SearchBooksAction', () => {
    it('Should create an action', () => {
      const action = new SearchBooksAction('term');
      expect(action.payload).toEqual('term');
      expect(action.type).toEqual('[SearchBooks] SEARCH_BOOKS');
    });
  });
});

