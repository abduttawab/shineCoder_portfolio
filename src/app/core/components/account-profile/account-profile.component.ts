import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})

/**
 * Account Profile Component
 */
export class AccountProfileComponent implements OnInit {


  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  /**
   * nav light class add
   */
  navClass = 'nav-light';

  constructor() { }

  ngOnInit(): void {
  }


}
