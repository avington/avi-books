import {effects} from './store/effects/index';
import {EffectsModule} from '@ngrx/effects';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {SharedModule} from '../shared/shared.module';
import { OathCallbackPageComponent } from './containers/oath-callback-page/oath-callback-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('account', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [OathCallbackPageComponent, LoginPageComponent]
})
export class AccountAreaModule {
}
