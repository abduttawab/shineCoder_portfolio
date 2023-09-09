import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list-one',
  templateUrl: './job-list-one.component.html',
  styleUrls: ['./job-list-one.component.css']
})
export class JobListOneComponent {
    // Set Topbar Option
    Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
