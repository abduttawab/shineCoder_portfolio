import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';
import { sitesettingsService } from 'src/app/services/sitesettings.service';

@Component({
  selector: 'app-page-contact-two',
  templateUrl: './page-contact-two.component.html',
  styleUrls: ['./page-contact-two.component.css']
})

/**
 * Page Contact-Two Component
 */
export class PageContactTwoComponent implements OnInit {

  objObser$: Observable<any[]>;
  obj;
  addMap="";
      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  phoneNumber ="+919 480-555-553"
  email ="shinecoder01@gmail.com"
 
  map: SafeResourceUrl;
  address = "7th Cross Chiranahalli, Badavane Udayagiri,  <br>Mandya, Karnataka- 571401"
  constructor(private modalService: NgbModal,public sanitizer: DomSanitizer
    ,private siteservice: sitesettingsService
    ) { 

   
  }

  ngOnInit(): void {
    this.getSiteSettings();
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }

  getSiteSettings() {
     this.objObser$ = this.siteservice.getSiteSettings();
     this.objObser$.subscribe((obj) => {
       console.log(obj);
         this.obj = obj;
  
     });
}
}
