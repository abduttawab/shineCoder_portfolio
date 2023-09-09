import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpcenter-support-request',
  templateUrl: './helpcenter-support-request.component.html',
  styleUrls: ['./helpcenter-support-request.component.css']
})

/**
 * Helpcenter Support Request Component
 */
export class HelpcenterSupportRequestComponent implements OnInit {

  Menuoption= 'help'
  Settingicon = true
  footerVariant = 'footer-seven';
  constructor() { }

  ngOnInit(): void {
  }

}
