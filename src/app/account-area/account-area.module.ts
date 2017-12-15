import {effects} from './store/effects/index';
import {EffectsModule} from '@ngrx/effects';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OathCallbackPageComponent} from './components/oath-callback-page/oath-callback-page.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {SharedModule} from '../shared/shared.module';
import { LoginPageComponent } from './components/login-page/login-page.component';

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
