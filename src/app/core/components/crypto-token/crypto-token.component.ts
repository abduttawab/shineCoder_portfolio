import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-crypto-token',
  templateUrl: './crypto-token.component.html',
  styleUrls: ['./crypto-token.component.css']
})
export class CryptoTokenComponent {
// Set Topbar
Menuoption = 'cryptocurrency'

  footerVariant = 'footer-three';
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
