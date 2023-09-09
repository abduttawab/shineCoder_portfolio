import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list-four',
  templateUrl: './job-list-four.component.html',
  styleUrls: ['./job-list-four.component.css']
})
export class JobListFourComponent {
    // Set Topbar Option
    Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
