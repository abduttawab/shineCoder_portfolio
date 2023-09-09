import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-corporate-blog',
  templateUrl: './corporate-blog.component.html',
  styleUrls: ['./corporate-blog.component.css']
})
export class CorporateBlogComponent {
// Set Topbar
  Menuoption = 'corporate'
  footerVariant = 'footer-five';
  navClass = "nav-light";

/***
 * Header button list show
 */
  Settingicon = true;
  
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
