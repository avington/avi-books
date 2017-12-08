import './rx-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {HomeAreaModule} from './home-area/home-area.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GLOBAL_PROVIDERS} from './global-providers/index';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AccountAreaModule} from './account-area/account-area.module';
import {environment} from '../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';

import {RouterStateSerializer} from '@ngrx/router-store';
import {CustomSerializer, reducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// store
import {accountEffects} from './store/effects';

const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HomeAreaModule,
    AccountAreaModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([...accountEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    ...GLOBAL_PROVIDERS,
    {provide: RouterStateSerializer, useClass: CustomSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
