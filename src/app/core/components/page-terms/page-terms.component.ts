import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-terms',
  templateUrl: './page-terms.component.html',
  styleUrls: ['./page-terms.component.css']
})

/***
 * Page terms Component
 */
export class PageTermsComponent implements OnInit {

  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  constructor() { }

  ngOnInit(): void {
  }

}
