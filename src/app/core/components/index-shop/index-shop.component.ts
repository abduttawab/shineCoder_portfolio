import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-shop',
  templateUrl: './index-shop.component.html',
  styleUrls: ['./index-shop.component.css']
})

/***
 * Shop Component
 */
export class IndexShopComponent implements OnInit {

 /***
   * nav bg class class set
   */
  shopPages = true;
   // Set Topbar Option
  Menuoption = 'shop';
  footerVariant = 'footer-two';

  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor() { }

  ngOnInit(): void {
  }

  /***
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  };


}
