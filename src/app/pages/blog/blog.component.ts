import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <app-header></app-header>
    <app-list-articles></app-list-articles>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class BlogComponent {}
