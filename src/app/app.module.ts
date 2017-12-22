import './rx-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeAreaModule } from './home-area/home-area.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GLOBAL_PROVIDERS } from './global-providers/index';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountAreaModule } from './account-area/account-area.module';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { CustomSerializer, reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// store
import { accountEffects } from './store/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AddTokenService } from './interceptors/add-token.service';
import { SharedModule } from './shared/shared.module';
import { INTERCEPTORS } from './interceptors';
import {ACCOUNT_AREA_GUARDS} from './account-area/guards';

const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    SharedModule,
    HomeAreaModule,
    AccountAreaModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([...accountEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    ...GLOBAL_PROVIDERS,
    ...INTERCEPTORS,
    ...ACCOUNT_AREA_GUARDS,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
