import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-blog-detail',
  templateUrl: './shop-blog-detail.component.html',
  styleUrls: ['./shop-blog-detail.component.css']
})
export class ShopBlogDetailComponent {

    // Set Topbar
  Menuoption = 'shop'
  footerVariant = 'footer-two';
  /***
   * Header button list show
   */
   shopPages = true;
}
