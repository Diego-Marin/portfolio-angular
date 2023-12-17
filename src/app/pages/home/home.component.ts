import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template:`
    <app-header></app-header>
    <app-about></app-about>
    <app-proyects></app-proyects>
    <app-more-proyects></app-more-proyects>
    <app-list-articles></app-list-articles>
    <app-contact></app-contact>
    <app-footer></app-footer>`,
  styles: []
})
export class HomeComponent {

}
