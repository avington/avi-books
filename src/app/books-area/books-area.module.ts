import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBooksComponent } from './containers/my-books/my-books.component';
import { LayoutsModule } from '../layouts/layouts.module';

const ROUTES: Routes = [{ path: '', component: MyBooksComponent }];

@NgModule({
  imports: [CommonModule, LayoutsModule, RouterModule.forChild(ROUTES)],
  declarations: [MyBooksComponent]
})
export class BooksAreaModule {}
