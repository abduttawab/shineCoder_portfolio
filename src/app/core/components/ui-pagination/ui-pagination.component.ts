import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.css']
})
export class UiPaginationComponent {
  /**
   * Header button list show
   */
  Settingicon = true;
  Menuoption = 'center'
  page = 1;
}
