import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {HomeAreaModule} from './home-area/home-area.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GLOBAL_PROVIDERS} from './global-providers/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HomeAreaModule,
    BrowserAnimationsModule
  ],
  providers: [
    ...GLOBAL_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
