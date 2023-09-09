import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InnerPageService } from 'src/app/services/innerpage.service';

@Component({
  selector: 'app-inner-page-detail',
  templateUrl: './inner-page-detail.component.html',
  styleUrls: ['./inner-page-detail.component.css']
})

/**
 * Page Case-Detail Component
 */
export class InnerPageDetailComponent implements OnInit {

      // Set Topbar Option
  innerPageId;
  Menuoption = 'center';
  Settingicon = true
  obj$: any;
  obj: any;
  constructor(private route: ActivatedRoute,
    private innerPageservice: InnerPageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.innerPageId = params['innerPageId'];
      this.getInnerPageListDetails(params['innerPageId']);
  });
  }

  getInnerPageListDetails(id) {
    this.obj$ = this.innerPageservice.getInnerPageListDetails(id);
    this.obj$.subscribe((objList) => {
      console.log(objList);
        this.obj = objList;
    });
  }

}
