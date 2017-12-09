import { GoAction } from "./../../../store/actions/router-actions";
import { TokenActions } from "./../actions/token-actions";
import { Token } from "./../../models/token";
import { Router } from "@angular/router";
import { TokenState } from "./../reducers/token-reducers";
import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as fromActions from "../actions";
import { map } from "rxjs/operators";
import { LocalStorage } from "ngx-webstorage";
import * as fromRoot from "../../../store";

@Injectable()
export class TokenEffectsService {
  @LocalStorage() token: Token;

  constructor(private actions$: Actions, private router: Router) {}

  @Effect()
  tokenUpdated$ = this.actions$.ofType(fromActions.UPDATE_USER_TOKEN).pipe(
    map((state: fromActions.TokenActions) => {
      this.token = { ...state.payload };
      return new fromRoot.GoAction({
        path: ["/"]
      });
    })
  );
}
