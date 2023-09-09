import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})

/**
 * Changelog Component
 */
export class ChangelogComponent implements OnInit {

  
  /**
 * Header button list show
 */
  Settingicon = true;
  Menuoption = 'center'
  
  constructor() { }

  ngOnInit(): void {
  }

}
