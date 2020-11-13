import { NgModule } from '@angular/core';
import { SomeLibComponent } from './some-lib.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SomeLibComponent,
  ],
  imports: [
    RouterModule,
  ],
  exports: [SomeLibComponent]
})
export class SomeLibModule { }
