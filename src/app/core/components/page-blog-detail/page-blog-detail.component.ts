import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-blog-detail',
  templateUrl: './page-blog-detail.component.html',
  styleUrls: ['./page-blog-detail.component.css']
})

/**
 * Page Blog-Detail Component
 */
export class PageBlogDetailComponent implements OnInit {

      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  constructor() { }

  ngOnInit(): void {
  }

}
