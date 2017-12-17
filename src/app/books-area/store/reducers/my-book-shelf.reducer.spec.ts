import * as fromMyBookShelfReducer from './my-book-shelf.reducer';
import * as fromActions from '../actions';
import * as mocks from '../../../../mocks';
import { mockBookShelfVolume } from '../../../../mocks';

describe('my-book-shelf Reducers', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromMyBookShelfReducer;
      const action = {} as any;
      const state = fromMyBookShelfReducer.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });
  describe('LoadMyShelfAction', () => {
    it('should set loading to true', () => {
      const { initialState } = fromMyBookShelfReducer;
      const action = new fromActions.LoadBookShelfActon({ id: 1 });
      const state = fromMyBookShelfReducer.reducer(initialState, action);
      expect(state.loading).toBeTruthy();
    });
  });

  describe('LoadMyShelfFailAction', () => {
    it('should set loading and loaded to false', () => {
      const { initialState } = fromMyBookShelfReducer;
      const action = new fromActions.LoadBookShelfFailAction({
        error: 'failed'
      });
      const state = fromMyBookShelfReducer.reducer(initialState, action);
      expect(state.loading).toBeFalsy();
      expect(state.loaded).toBeFalsy();
      expect(state.entities).toBeNull();
    });
  });

  describe('LoadMyShelfSuccessAction', () => {
    it('should load the entities', () => {
      const { initialState } = fromMyBookShelfReducer;
      const action = new fromActions.LoadBookShelfSuccessAction(
        mocks.mockBookShelfVolume as any
      );
      const state = fromMyBookShelfReducer.reducer(initialState, action);

      const entities = { WtqKCgAAQBAJ: mockBookShelfVolume.items[0] };
      expect(state.loading).toBeFalsy();
      expect(state.loaded).toBeTruthy();
      expect(state.entities['WtqKCgAAQBAJ'].id).toEqual('WtqKCgAAQBAJ');
    });
  });
});
