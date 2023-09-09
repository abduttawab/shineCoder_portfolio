import { Component } from '@angular/core';

@Component({
  selector: 'app-job-candidate-list',
  templateUrl: './job-candidate-list.component.html',
  styleUrls: ['./job-candidate-list.component.css']
})
export class JobCandidateListComponent {
   // Set Topbar Option
   Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
