import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-job-apply',
  templateUrl: './page-job-apply.component.html',
  styleUrls: ['./page-job-apply.component.css']
})

/**
 * Page Job-Apply Component
 */
export class PageJobApplyComponent implements OnInit {

  // Set Topbar
  Settingicon = true
  Menuoption = 'job'
  constructor() { }

  ngOnInit(): void {
  }

}
