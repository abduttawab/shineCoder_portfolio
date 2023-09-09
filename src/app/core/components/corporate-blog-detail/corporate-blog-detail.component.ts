import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-blog-detail',
  templateUrl: './corporate-blog-detail.component.html',
  styleUrls: ['./corporate-blog-detail.component.css']
})
export class CorporateBlogDetailComponent {
// Set Topbar
Menuoption = 'corporate'

/***
 * Header button list show
 */
  Settingicon = true;
  footerVariant = 'footer-five';
  navClass = "nav-light";
}
