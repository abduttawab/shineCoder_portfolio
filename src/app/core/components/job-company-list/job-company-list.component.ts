import { Component } from '@angular/core';

@Component({
  selector: 'app-job-company-list',
  templateUrl: './job-company-list.component.html',
  styleUrls: ['./job-company-list.component.css']
})
export class JobCompanyListComponent {
   // Set Topbar Option
   Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
