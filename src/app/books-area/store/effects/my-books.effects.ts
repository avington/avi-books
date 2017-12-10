import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as fromActions from '../actions';

@Injectable()
export class MyBooksEffects {
  @Effect()
  myBooks$: Observable<Action> = this.actions$.ofType(
    fromActions.MyBooksActionTypes.LOAD_MY_BOOKS
  );

  constructor(private actions$: Actions) {}
}
