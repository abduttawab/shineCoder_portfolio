import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomePageInfoService } from 'src/app/services/homepageinfo.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

/**
 * Index Component
 */
export class IndexComponent implements OnInit {

  developmentForm!: UntypedFormGroup;
  submitted = false;
  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = false;
  HomePageInfo$;
  HomePageInfo= <any> {};

  /**
   * Partners slider
   */
  customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    // autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  constructor(private formBuilder: UntypedFormBuilder, private homepageservice: HomePageInfoService,) { }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.developmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.loadHomePageInfo();
  }

  // convenience getter for easy access to form fields
  get form() { return this.developmentForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.developmentForm.invalid) {
      return;
    }
  }

  loadHomePageInfo() {
    this.HomePageInfo$ = this.homepageservice.getHomePageInfo();
    this.HomePageInfo$.subscribe((menuList) => {
      console.log(menuList);
        this.HomePageInfo = menuList;
    });
}

}
