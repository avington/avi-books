import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-area/home-page/home-page.component';
import { OathCallbackPageComponent } from './account-area/components/oath-callback-page/oath-callback-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
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
