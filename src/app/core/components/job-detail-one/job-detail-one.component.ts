import { Component } from '@angular/core';

@Component({
  selector: 'app-job-detail-one',
  templateUrl: './job-detail-one.component.html',
  styleUrls: ['./job-detail-one.component.css']
})
export class JobDetailOneComponent {
   // Set Topbar Option
   Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
