import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portfolio-service',
  templateUrl: './portfolio-service.component.html',
  styleUrls: ['./portfolio-service.component.css']
})
export class PortfolioServiceComponent {
  // Set Topbar
  Settingicon = true
  Menuoption = 'portfolio'
  footerVariant = 'footer-four';
  
    /**
   * Clients Slider
   */
    customOptions: OwlOptions = {
      // loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      // autoplay: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        900: {
          items: 3
        }
      },
      nav: false
    };
}
