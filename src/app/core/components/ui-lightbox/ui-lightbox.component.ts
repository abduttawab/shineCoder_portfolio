import { Component } from '@angular/core';
// Light Box
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-ui-lightbox',
  templateUrl: './ui-lightbox.component.html',
  styleUrls: ['./ui-lightbox.component.css']
})
export class UiLightboxComponent {
  /**
   * Header button list show
   */
  Settingicon = true;
  Menuoption = 'center';
  _gallery: Array<any> = [];

  constructor(private lightbox: Lightbox) {
  }

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
        src: 'assets/images/small/img-3.jpg',
        thumb: 'assets/images/small/img-3.jpg'
      },
      {
        id: '4',
        src: 'assets/images/small/img-4.jpg',
        thumb: 'assets/images/small/img-4.jpg'
      },
      {
        id: '5',
        src: 'assets/images/small/img-5.jpg',
        thumb: 'assets/images/small/img-5.jpg'
      },
      {
        id: '6',
        src: 'assets/images/small/img-6.jpg',
        thumb: 'assets/images/small/img-6.jpg'
      },
    ]
  }

  /**
* Open lightbox
*/
  openGallery(index: any): void {
    this._gallery = [{ id: '1', src: 'assets/images/work/11.jpg', thumb: 'assets/images/work/11.jpg', caption: 'Work-image'},{ id: '1', src: 'assets/images/personal/6.jpg', thumb: 'assets/images/personal/6.jpg'}]
    this.lightbox.open(this._gallery, index, { disableScrolling: true, centerVertically: true, showZoom: false });
  }
}
