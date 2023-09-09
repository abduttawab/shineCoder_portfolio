import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-corporate-team',
  templateUrl: './corporate-team.component.html',
  styleUrls: ['./corporate-team.component.css']
})
export class CorporateTeamComponent {
// Set Topbar
Menuoption = 'corporate'

/***
 * Header button list show
 */
  Settingicon = true;
  footerVariant = 'footer-five';
  navClass = "nav-light";
  
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
