import * as fromMyBookShelves from './my-book-shelves.action';
import { exec } from 'child_process';
import { MyBookShelves } from '../../models/my-book-shelves';

describe('my-book-selves Actions', () => {
  describe('load shelves Actions', () => {
    describe('LoadMyBookShelves', () => {
      it('should create an action', () => {
        const action = new fromMyBookShelves.LoadMyBookShelves();
        expect(action.type).toBe(fromMyBookShelves.MyBooksActionTypes.LOAD_MY_BOOKSHELVES);
      });
    });

    describe('LoadMyBookShelvesSuccess', () => {
      it('should create an action', () => {
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

        const action = new fromMyBookShelves.LoadMyBookShelvesSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromMyBookShelves.MyBooksActionTypes.LOAD_MY_BOOKSHELVES_SUCCESS,
          payload: payload
        });
      });
    });

    describe('LoadMyBookShelvesFail', () => {
        it('should create an action', () => {
          const payload = {message: 'create an error'}

          const action = new fromMyBookShelves.LoadMyBookShelvesFailed(payload);

          expect({ ...action }).toEqual({
            type: fromMyBookShelves.MyBooksActionTypes.LOAD_MY_BOOKSHELVES_FAILED,
            payload: payload
          });
        });
      });
  });
});
