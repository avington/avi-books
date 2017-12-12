import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutsModule} from '../layouts/layouts.module';
import {BOOKS_AREA_SERVICES} from './services';
import {StoreModule} from '@ngrx/store';
import * as fromStore from './store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {GLOBAL_PROVIDERS} from '../global-providers';
import {RouterStateSerializer} from '@ngrx/router-store';
import {CustomSerializer} from '../store/reducers';
import {MyBookShelvesComponent} from './containers/my-book-shelves/my-book-shelves.component';


const ROUTES: Routes = [{path: '', component: MyBookShelvesComponent}];

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('books', fromStore.reducers),
    EffectsModule.forFeature([...fromStore.effects]),
  ],
  declarations: [MyBookShelvesComponent],
  providers: [
    ...GLOBAL_PROVIDERS,
    ...BOOKS_AREA_SERVICES,
    {provide: RouterStateSerializer, useClass: CustomSerializer}
  ]
})
export class BooksAreaModule {
}
