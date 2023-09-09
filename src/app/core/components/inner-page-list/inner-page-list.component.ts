import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { InnerPageService } from 'src/app/services/innerpage.service';
import { MenuService } from 'src/app/services/menu.service';

interface blog {
  image: string;
  title: string;
  content: string,
  like: string;
  message: string;
  name: string;
  date: string;
};

@Component({
  selector: 'app-inner-page-list',
  templateUrl: './inner-page-list.component.html',
  styleUrls: ['./inner-page-list.component.css']
})

/**
 * Page Blog-List Component
 */
export class InnerPageListComponent implements OnInit {

      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  /**
   * Blog Data
   */
  blogListData: blog[] = [
    {
      image: "assets/images/work/14.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/15.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/16.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/17.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/18.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/19.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/13.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];


  innerPageType: "";
  objList$: Observable<any>;
  objList: any;

  obj$: Observable<any>;
  obj: any;

  

  constructor(private route: ActivatedRoute,
    private innerPageservice: InnerPageService,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.innerPageType = params['innerPageType'];
      console.log(this.innerPageType);
      this.getInnerList(params['innerPageType']);
      this.getInnerMain(params['innerPageType']);
  });
  }

  getInnerList(innerPageType) {
    this.objList$ = this.innerPageservice.getInnerList(innerPageType);
    this.objList$.subscribe((objList) => {
      console.log(objList);
        this.objList = objList;
    });
}

getInnerMain(innerPageType) {
  this.obj$ = this.innerPageservice.getInnerMain(innerPageType);
  this.obj$.subscribe((objList) => {
    console.log(objList);
      this.obj = objList;
  });
}

}
