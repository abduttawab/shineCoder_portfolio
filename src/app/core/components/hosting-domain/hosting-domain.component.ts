import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hosting-domain',
  templateUrl: './hosting-domain.component.html',
  styleUrls: ['./hosting-domain.component.css']
})
export class HostingDomainComponent {
  navClass = 'nav-light';
    // Set Topbar Option
  Menuoption = 'hosting';
  Settingicon = true
  footerVariant = 'footer-ten';

      /**
   * amazing partners Slider
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
