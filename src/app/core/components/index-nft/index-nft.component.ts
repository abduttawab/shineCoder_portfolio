import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-index-nft',
  templateUrl: './index-nft.component.html',
  styleUrls: ['./index-nft.component.css']
})
export class IndexNftComponent {
  // Set Topbar Option
  Menuoption = 'nft';
  Nfticons = true
  footerVariant = 'footer-three';

  /***
 * Follow Slider
 */
  public config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    direction: 'horizontal',
    breakpoints: {
      320: {
        slidesPerView: 0,
      },
      768: {
        slidesPerView: 1,
      },
      1080: {
        slidesPerView: 4,
      }
    }
  };
}
