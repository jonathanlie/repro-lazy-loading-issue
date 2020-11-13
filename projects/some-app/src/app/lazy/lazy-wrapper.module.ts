import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { LazyModule, LazyListingComponent } from 'some-lib';

export const someLibRoutes: Routes = [
  {
    path: '',
    component: LazyListingComponent,
  },
];

@NgModule({
  imports: [
    LazyModule,
    CommonModule,
    RouterModule.forChild(someLibRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LazyWrapperModule { }
