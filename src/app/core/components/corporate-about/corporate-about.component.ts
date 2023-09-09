import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-corporate-about',
  templateUrl: './corporate-about.component.html',
  styleUrls: ['./corporate-about.component.css']
})
export class CorporateAboutComponent {

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
    navSpeed: 200,
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
  
   /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }

    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
      document.getElementById('back-to-top').style.display = 'inline';
    } else {
      document.getElementById('back-to-top').style.display = 'none';
    }
  }
}
