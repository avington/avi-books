import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-area/home-page/home-page.component';
import {OathCallbackPageComponent} from './account-area/components/oath-callback-page/oath-callback-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'oath2/callback', component: OathCallbackPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
