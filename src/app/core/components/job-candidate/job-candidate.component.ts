import { Component } from '@angular/core';

@Component({
  selector: 'app-job-candidate',
  templateUrl: './job-candidate.component.html',
  styleUrls: ['./job-candidate.component.css']
})
export class JobCandidateComponent {
   // Set Topbar Option
   Menuoption = 'job';
  Settingicon = true
  footerVariant = 'bg-light';
  navClass = "nav-light";
}
