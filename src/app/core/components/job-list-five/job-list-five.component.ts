import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list-five',
  templateUrl: './job-list-five.component.html',
  styleUrls: ['./job-list-five.component.css']
})
export class JobListFiveComponent {
    // Set Topbar Option
    Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
