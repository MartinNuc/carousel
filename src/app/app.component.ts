import { Component } from '@angular/core';
import { Carousel } from './carousel';
import { CarouselObservable } from './carousel-observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleCount = 4;
  numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  stringsArray = ['a', 'b', 'c', 'd', 'e', 'f'];
  // carousel = new Carousel<number>(this.numbersArray);
  carousel = new CarouselObservable<string>(this.stringsArray);
  visibleItems$ = this.carousel.getVisibleItems();
  constructor() {
  }
}
