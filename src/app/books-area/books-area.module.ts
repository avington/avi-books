import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from '../layouts/layouts.module';
import { BOOKS_AREA_SERVICES } from './services';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { GLOBAL_PROVIDERS } from '../global-providers';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from '../store/reducers';
import { MyBookShelvesComponent } from './containers/my-book-shelves/my-book-shelves.component';
import { BOOKS_AREA_GUARDS } from './guards';
import { CheckMyShelvesGuard } from './guards/check-my-shelves.guard';
import { BookShelfTileComponent } from './components/book-shelf-tile/book-shelf-tile.component';
import { SharedModule } from '../shared/shared.module';
import { CheckBookSelfExistGuard } from './guards/check-book-self-exist.guard';
import { MyBookShelfComponent } from './containers/my-book-shelf/my-book-shelf.component';
import { INTERCEPTORS } from '../interceptors';
import { VolumeDisplayComponent } from './components/volume-display/volume-display.component';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { ACCOUNT_AREA_GUARDS } from '../account-area/guards';
import { CheckIsAuthenticatedGuard } from '../account-area/guards/check-is-authenticated.guard';
import {
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCardModule,
  MatButtonToggleModule,
  MatButtonModule, MatListModule, MatPaginatorModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { AdvancedSearchContainerComponent } from './containers/advanced-search-container/advanced-search-container.component';
import { AdvancedSearchFormComponent } from './components/advanced-search-form/advanced-search-form.component';
import { SearchResultsContainerComponent } from './containers/search-results-container/search-results-container.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MyBookShelvesComponent,
    canActivate: [CheckMyShelvesGuard, CheckIsAuthenticatedGuard]
  },
  {
    path: 'book-shelf/:bookShelfId',
    component: MyBookShelfComponent,
    canActivate: [CheckBookSelfExistGuard, CheckIsAuthenticatedGuard]
  },
  {
    path: 'search',
    component: SearchContainerComponent,
    canActivate: [CheckIsAuthenticatedGuard]
  },
  {
    path: 'adv-search',
    component: AdvancedSearchContainerComponent,
    canActivate: [CheckIsAuthenticatedGuard]
  },
  {
    path: 'search-results',
    component: SearchResultsContainerComponent,
    canActivate: [CheckIsAuthenticatedGuard]
  }
];

@NgModule({
  imports: [
    /* material design modules */
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatPaginatorModule,
    /* end material design modules */

    CommonModule,
    LayoutsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('books', fromStore.reducers),
    EffectsModule.forFeature([...fromStore.effects])
  ],
  declarations: [
    MyBookShelvesComponent,
    BookShelfTileComponent,
    MyBookShelfComponent,
    MyBookShelfComponent,
    VolumeDisplayComponent,
    SearchContainerComponent,
    SearchPanelComponent,
    AdvancedSearchContainerComponent,
    AdvancedSearchFormComponent,
    SearchResultsContainerComponent
  ],
  providers: [
    ...GLOBAL_PROVIDERS,
    ...INTERCEPTORS,
    ...BOOKS_AREA_SERVICES,
    ...BOOKS_AREA_GUARDS,
    ...ACCOUNT_AREA_GUARDS,
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ]
})
export class BooksAreaModule {}
