import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-blog',
  templateUrl: './shop-blog.component.html',
  styleUrls: ['./shop-blog.component.css']
})
export class ShopBlogComponent {

    // Set Topbar
  Menuoption = 'shop'
  footerVariant = 'footer-two';
  /***
   * Header button list show
   */
   shopPages = true;
}
