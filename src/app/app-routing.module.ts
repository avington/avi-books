import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-area/home-page/home-page.component';
import {OathCallbackPageComponent} from './account-area/containers/oath-callback-page/oath-callback-page.component';
import {LoginPageComponent} from './account-area/containers/login-page/login-page.component';



const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'oath2/callback', component: OathCallbackPageComponent },
  {
    path: 'books',
    loadChildren: './books-area/books-area.module#BooksAreaModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
