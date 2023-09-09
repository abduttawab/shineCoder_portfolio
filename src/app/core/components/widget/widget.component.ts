import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Light Box
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})

/**
 * Widget Component
 */
export class WidgetComponent implements OnInit {

  /**
 * Header button list show
 */
  Settingicon = true;
  Menuoption = 'center'
  _gallery: Array<any> = [];

  constructor(private modalService: NgbModal,
    private lightbox: Lightbox) { }

  ngOnInit(): void {
    this._gallery = [
      {
        id: '1',
        src: 'assets/images/small/img-1.jpg',
        thumb: 'assets/images/small/img-1.jpg'
      },
      {
        id: '2',
        src: 'assets/images/small/img-2.jpg',
        thumb: 'assets/images/small/img-2.jpg'
      },
      {
        id: '3',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin',
        thumb: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin'
      }
    ]
  }
  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }

  /**
* Open lightbox
*/
  openGallery(index: any): void {
    this._gallery = [{ id: '1', src: 'assets/images/work/11.jpg', thumb: 'assets/images/work/11.jpg', caption: 'Work-image' }, { id: '1', src: 'assets/images/personal/6.jpg', thumb: 'assets/images/personal/6.jpg' }]
    this.lightbox.open(this._gallery, index, { disableScrolling: true, centerVertically: true, showZoom: false });
  }
}
