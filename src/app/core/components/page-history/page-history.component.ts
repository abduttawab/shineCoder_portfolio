import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-history',
  templateUrl: './page-history.component.html',
  styleUrls: ['./page-history.component.css']
})

/**
 * Page History Component
 */
export class PageHistoryComponent implements OnInit {

  
      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  constructor() { }

  ngOnInit(): void {
  }

}
