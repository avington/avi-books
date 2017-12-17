import { BookShelfDetail } from './../../models/book-shelf-detail';
import { BookShelf } from './../../models/book-shelf';
import * as fromActions from './my-book-shelf.actions';
import * as mocks from '../../../../mocks';
describe('MyBookShelf Actions', () => {
  describe('MyBookShelfLoadActions', () => {
    describe('LoadMyBookShelf Action', () => {
      it('Should create an action', () => {
        const payload: BookShelf = { id: 1 };
        const action = new fromActions.LoadBookShelfActon(payload);
        expect(action.type).toEqual(
          fromActions.BookShelfActionTypes.LOAD_BOOKS_SHELF
        );
        expect(action.payload.id).toEqual(1);
      });
    });

    describe('LoadMyBookShelfSuccessAction', () => {
      it('Should create an action', () => {
        const payload = mocks.mockBookShelfVolume as any;
        const action = new fromActions.LoadBookShelfSuccessAction(payload);
        expect(action.type).toEqual(
          fromActions.BookShelfActionTypes.LOAD_BOOK_SHELF_SUCCESS
        );
        expect(action.payload.totalItems).toEqual(4);
      });
    });
    describe('LoadMyBookShelfFailAction', () => {
      it('Should create an action', () => {
        const payload = { error: 'this is an error' };
        const action = new fromActions.LoadBookShelfFailAction(payload);
        expect(action.type).toEqual(
          fromActions.BookShelfActionTypes.LOAD_BOOK_SHELF_FAIL
        );
        expect(action.payload.error).toEqual(payload.error);
      });
    });
  });
});
