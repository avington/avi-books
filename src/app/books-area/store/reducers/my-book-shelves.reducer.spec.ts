import * as fromMyBookShelves from './my-book-shelves.reducer';
import * as fromActions from '../actions';
import {MyBookShelves} from '../../models/my-book-shelves';

describe('my-book-shelves Reducers', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const {initialState} = fromMyBookShelves;
      const action = {} as any;
      const state = fromMyBookShelves.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });

  describe('Load My Shelves Action', () => {
    it('should set loading to true', () => {
      const {initialState} = fromMyBookShelves;
      const action = new fromActions.LoadMyBookShelves();
      const state = fromMyBookShelves.reducer(initialState, action);

      expect(state.loading).toBe(true);
      expect(state.loaded).toBe(false);
      expect(state.entities).toEqual({});
    });

  });

  describe('Load My Shelves SUCCESS Action', () => {
    it('should set loading to true', () => {

      const payload: MyBookShelves = {
        kind: 'books#bookshelves',
        items: [
          {
            kind: 'books#bookshelf',
            id: 7,
            selfLink:
              'https://www.googleapis.com/books/v1/users/105278433794716085866/bookshelves/7',
            title: 'My Google eBooks',
            access: 'PRIVATE',
            updated: '2017-12-12T20:21:13.000Z',
            created: '2017-12-12T20:21:13.000Z',
            volumeCount: 4,
            volumesLastUpdated: '2017-12-12T20:21:13.000Z'
          },
          {
            kind: 'books#bookshelf',
            id: 1,
            selfLink:
              'https://www.googleapis.com/books/v1/users/105278433794716085866/bookshelves/1',
            title: 'Purchased',
            access: 'PRIVATE',
            updated: '2017-12-12T20:21:13.000Z',
            created: '2017-12-12T20:21:13.000Z',
            volumeCount: 0,
            volumesLastUpdated: '2017-12-12T20:21:13.000Z'
          }
        ]
      };

      const entities = {
        7: payload.items[0],
        1: payload.items[1]
      };


      const {initialState} = fromMyBookShelves;
      const action = new fromActions.LoadMyBookShelvesSuccess(payload);
      const state = fromMyBookShelves.reducer(initialState, action);

      expect(state.loading).toBe(false);
      expect(state.loaded).toBe(true);
      expect(state.entities).toEqual(entities);
    });

  });
});

