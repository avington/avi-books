import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DefaultLayoutComponent, DefaultHeaderComponent, DefaultFooterComponent
  ],
  declarations: [DefaultLayoutComponent, DefaultHeaderComponent, DefaultFooterComponent]
})
export class LayoutsModule { }
