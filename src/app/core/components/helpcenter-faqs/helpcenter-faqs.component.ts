import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpcenter-faqs',
  templateUrl: './helpcenter-faqs.component.html',
  styleUrls: ['./helpcenter-faqs.component.css']
})

/**
 * Helpcenter Faqs Component
 */
export class HelpcenterFaqsComponent implements OnInit {

  Menuoption= 'help'
  Settingicon = true
  footerVariant = 'footer-seven';

  constructor() { }

  ngOnInit(): void {
  }

}
