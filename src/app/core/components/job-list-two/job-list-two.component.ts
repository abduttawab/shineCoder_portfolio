import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list-two',
  templateUrl: './job-list-two.component.html',
  styleUrls: ['./job-list-two.component.css']
})
export class JobListTwoComponent {
    // Set Topbar Option
    Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
