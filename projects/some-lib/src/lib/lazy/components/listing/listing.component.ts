import { Component } from '@angular/core';

@Component({
  selector: 'lazy-listing',
  template: `<div class="className">{{ componentName }}</div>`,
  styleUrls: ['./listing.component.scss'],
})
export class LazyListingComponent {
  componentName = 'lazy-listing';
}
