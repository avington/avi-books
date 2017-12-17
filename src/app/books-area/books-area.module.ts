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
import {BOOKS_AREA_GUARDS} from './guards';
import {CheckMyShelvesGuard} from './guards/check-my-shelves.guard';
import { BookShelfTileComponent } from './components/book-shelf-tile/book-shelf-tile.component';
import {SharedModule} from '../shared/shared.module';
import {CheckBookSelfExistGuard} from './guards/check-book-self-exist.guard';
import { MyBookShelfComponent } from './containers/my-book-shelf/my-book-shelf.component';
import {INTERCEPTORS} from '../interceptors';
import { VolumeDisplayComponent } from './components/volume-display/volume-display.component';


const ROUTES: Routes = [
  {path: '', component: MyBookShelvesComponent, canActivate: [CheckMyShelvesGuard]},
  {path: 'book-shelf/:bookShelfId', component: MyBookShelfComponent, canActivate: [CheckBookSelfExistGuard]}
  ];

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('books', fromStore.reducers),
    EffectsModule.forFeature([...fromStore.effects]),
  ],
  declarations: [MyBookShelvesComponent, BookShelfTileComponent, MyBookShelfComponent, MyBookShelfComponent, VolumeDisplayComponent],
  providers: [
    ...GLOBAL_PROVIDERS,
    ...INTERCEPTORS,
    ...BOOKS_AREA_SERVICES,
    ...BOOKS_AREA_GUARDS,
    {provide: RouterStateSerializer, useClass: CustomSerializer}
  ]
})
export class BooksAreaModule {
}
