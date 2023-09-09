import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list-three',
  templateUrl: './job-list-three.component.html',
  styleUrls: ['./job-list-three.component.css']
})
export class JobListThreeComponent {
    // Set Topbar Option
    Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
