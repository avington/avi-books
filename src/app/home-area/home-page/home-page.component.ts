import { Token } from "./../../account-area/models/token";
import { Store } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import * as fromAccountStore from "./../../account-area/store";
import { AuthHelperService } from "../../global-providers/auth-helper.service";

@Component({
  selector: "avi-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  constructor(
    private store: Store<fromAccountStore.AccountState>,
    private authHelper: AuthHelperService,
    private chgDetection: ChangeDetectorRef
  ) {}
  storeToken: Token;
  isLoggedIn: boolean;

  ngOnInit() {
    this.isLoggedIn = this.authHelper.isAuthenticated(this.storeToken);
    this.store
      .select(fromAccountStore.getTokenFromState)
      .subscribe((token: Token) => {
        this.storeToken = { ...token };
        this.isLoggedIn = this.authHelper.isAuthenticated(this.storeToken);
        this.chgDetection.detectChanges();
      });
  }
}
