import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    RatingStarsComponent
  ],
  declarations: [LoadingComponent, RatingStarsComponent]
})
export class SharedModule { }
