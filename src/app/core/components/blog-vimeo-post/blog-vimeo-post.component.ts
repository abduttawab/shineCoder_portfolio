import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-blog-vimeo-post',
  templateUrl: './blog-vimeo-post.component.html',
  styleUrls: ['./blog-vimeo-post.component.css']
})
export class BlogVimeoPostComponent {
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
