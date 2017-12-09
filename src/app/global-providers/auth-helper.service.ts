import { Injectable } from "@angular/core";
import { Token } from "../account-area/models/token";
import { isNil, has } from "lodash";
import * as moment from "moment";

@Injectable()
export class AuthHelperService {
  constructor() {}

  isAuthenticated(token: Token): boolean {
    if (!has(token, "accessToken") || !token.accessToken) {
      return false;
    }

    const expiredDate = new Date(
      token.timeCreated.setSeconds(
        token.timeCreated.getSeconds() + parseInt(token.expiresIn, 10)
      )
    );

    const isNotExpired = moment().isAfter(expiredDate);
    return !isNotExpired;
  }
}
