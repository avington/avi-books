import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {LayoutsModule} from '../layouts/layouts.module';
import { GreetingsComponent } from './containers/greetings/greetings.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule
  ],
  declarations: [HomePageComponent, GreetingsComponent, DashboardComponent, DashboardTileComponent]
})
export class HomeAreaModule { }
