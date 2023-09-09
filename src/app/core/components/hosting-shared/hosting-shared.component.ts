import { Component } from '@angular/core';

@Component({
  selector: 'app-hosting-shared',
  templateUrl: './hosting-shared.component.html',
  styleUrls: ['./hosting-shared.component.css']
})
export class HostingSharedComponent {
  navClass = 'nav-light';
    // Set Topbar Option
  Menuoption = 'hosting';
  Settingicon = true
  footerVariant = 'footer-ten';
}
