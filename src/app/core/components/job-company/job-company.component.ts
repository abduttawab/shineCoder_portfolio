import { Component } from '@angular/core';

@Component({
  selector: 'app-job-company',
  templateUrl: './job-company.component.html',
  styleUrls: ['./job-company.component.css']
})
export class JobCompanyComponent {
   // Set Topbar Option
   Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
