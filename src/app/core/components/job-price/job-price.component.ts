import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-job-price',
  templateUrl: './job-price.component.html',
  styleUrls: ['./job-price.component.css']
})
export class JobPriceComponent {
   // Set Topbar Option
   Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
  
  /**
   * Review Testimonial Data
   */
  reviewData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Thomas Israel ",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The advantage of its Latin origin and the relative meaninglessness
      of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention
      from the layout. "`
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" There is now an abundance of readable dummy texts. These are
      usually used when a text is required purely to fill a space. These alternatives to the classic Lorem
      Ipsum texts are often amusing and tell short, funny or nonsensical stories. "`
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text
      composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling
      all the instances of the unusual word 'consectetur' he could find "`
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have
      originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added
      or deleted at various positions within the text. "`
    }
  ];

  /***
   * Client Review Owl Slider
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
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: false
  };
}
