import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-carousel',
  templateUrl: './ui-carousel.component.html',
  styleUrls: ['./ui-carousel.component.css']
})
export class UiCarouselComponent {
  /**
   * Header button list show
   */
  Settingicon = true;
  Menuoption = 'center'
  showNavigationArrows = true;
  showNavigationIndicators = true;
}
