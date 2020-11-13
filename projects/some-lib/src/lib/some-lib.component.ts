import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-lib',
  template: `
    <p>
      some-lib works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class SomeLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
