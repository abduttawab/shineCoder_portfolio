import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-contact-one',
  templateUrl: './page-contact-one.component.html',
  styleUrls: ['./page-contact-one.component.css']
})

/**
 * Page Contact-One Component
 */
export class PageContactOneComponent implements OnInit {

      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true;
  phoneNumber ="+919 480-555-553"
  email ="shinecoder01@gmail.com"
  map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.943407896338!2d76.90293018564184!3d12.519908093064648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa0d09ad9a7ff%3A0x6bf565f2823b343c!2s7th%20Cross%20St%2C%20Udhaygiri%2C%20Nehru%20Nagar%2C%20Mandya%2C%20Karnataka%20571401%2C%20India!5e0!3m2!1sen!2sbd!4v1686502059311!5m2!1sen!2sbd"
  address = "7th Cross Chiranahalli, Badavane Udayagiri,  <br>Mandya, Karnataka- 571401"
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
