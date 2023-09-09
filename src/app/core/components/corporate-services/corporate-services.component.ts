import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-services',
  templateUrl: './corporate-services.component.html',
  styleUrls: ['./corporate-services.component.css']
})
export class CorporateServicesComponent {
// Set Topbar
  Menuoption = 'corporate'
  navClass = "nav-light";

/***
 * Header button list show
 */
  Settingicon = true;
  footerVariant = 'footer-five';
}
