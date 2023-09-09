import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpcenter-guides',
  templateUrl: './helpcenter-guides.component.html',
  styleUrls: ['./helpcenter-guides.component.css']
})

/**
 * Helpcenter Guides Component
 */
export class HelpcenterGuidesComponent implements OnInit {

  Menuoption= 'help'
  Settingicon = true
  footerVariant = 'footer-seven';
  constructor() { }

  ngOnInit(): void {
  }

}
