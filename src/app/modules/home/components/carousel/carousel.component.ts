import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'trv-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [
    'assets/images/travel-collage.jpg',
    'assets/images/travel-collage-3.jpg',
    'assets/images/travel-collage-4.jpg'
  ]

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}