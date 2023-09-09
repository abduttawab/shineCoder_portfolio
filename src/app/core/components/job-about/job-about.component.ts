import { Component } from '@angular/core';

@Component({
  selector: 'app-job-about',
  templateUrl: './job-about.component.html',
  styleUrls: ['./job-about.component.css']
})
export class JobAboutComponent {
   // Set Topbar Option
   Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
