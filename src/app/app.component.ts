import { Router } from "@angular/router";
import { UpdateUserTokenAction } from "./account-area/store/actions/token-actions";
import { AuthHelperService } from "./global-providers/auth-helper.service";
import { Component } from "@angular/core";
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
export class AppComponent {
  @LocalStorage() token: Token;

  constructor(
    private store: Store<fromAccountStore.AccountState>,
    private authHelper: AuthHelperService
  ) {}
}
