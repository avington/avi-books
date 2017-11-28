import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {LayoutsModule} from '../layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule
  ],
  declarations: [HomePageComponent]
})
export class HomeAreaModule { }
