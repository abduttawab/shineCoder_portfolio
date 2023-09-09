import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-blog-about',
  templateUrl: './blog-about.component.html',
  styleUrls: ['./blog-about.component.css']
})
export class BlogAboutComponent {
    // Set Topbar Option
  Menuoption = 'blog';
  footerVariant = 'footer-nine';
  /***
   * Nav bg light calss Add
   */
  navClass = 'navbar-white-bg';
  Settingicon = true

    /***
   * Follow Slider
   */
    public config: SwiperOptions = {
      a11y: { enabled: true },
      direction: 'horizontal',
      slidesPerView: 10,
      keyboard: true,
      navigation: true,
      pagination: false
    };
}
