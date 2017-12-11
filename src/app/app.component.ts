import { Router } from "@angular/router";
import { UpdateUserTokenAction } from "./account-area/store/actions/token-actions";
import { AuthHelperService } from "./global-providers/auth-helper.service";
import { Component, OnInit } from "@angular/core";
import * as fromAccountStore from "./account-area/store";
import { Store } from "@ngrx/store";
import { LocalStorage } from "ngx-webstorage";
import { Token } from "./account-area/models/token";
import * as fromStore from "./store";
import { HasUserTokenAction } from "./account-area/store";

@Component({
  selector: "avi-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @LocalStorage() token: Token;

  constructor(
    private store: Store<fromAccountStore.AccountState>,
    private authHelper: AuthHelperService
  ) {}

  ngOnInit() {
    if (this.token) {
      this.store.dispatch(new HasUserTokenAction(this.token));
    }
  }
}
