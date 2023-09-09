import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from "rxjs";
import { AccountService } from '../../services/account.service';
import { MenuService } from "src/app/services/menu.service";

import * as $ from 'jquery';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})

/***
 * Header Component
 */
export class HeaderComponent implements OnInit {


   LoginStatus$ = new BehaviorSubject<boolean>(null);
    Username$: Observable<string>;

    menu$: Observable<any[]>;
    menus: any[];

  @Input() navClass: string;
  @Input() buttonList: boolean;
  @Input() sliderTopbar: boolean;
  @Input() isdeveloper: boolean;
  @Input() shopPages: boolean;
  @Input() Settingicon: boolean;
  @Input() appicons: boolean;
  @Input() Nfticons: boolean;
  @Input() Menuoption: string;

  public href: string = "";


  constructor(
    private menuservice: MenuService,
    private acct: AccountService,private router: Router, private modalService: NgbModal, private offcanvasService: NgbOffcanvas) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }

  isCondensed = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this._activateMenuDropdown();
          }, 0);
  }

  ngOnInit(): void {

 this.jqueryInit();


       this.acct.globalStateChanged.subscribe((state) => {
            this.LoginStatus$.next(state.loggedInStatus);
        });

        this.Username$ = this.acct.currentUserName;

        this.loadMenu();
   


    this.href = this.router.url;
    if (this.router.url == '/index-classic-saas') {
      var light_btn = document.querySelectorAll(".login-btn-primary")
      light_btn.forEach(element => {
        (element as HTMLElement).style.display = "none";
      });

      var dark_btn = document.querySelectorAll(".login-btn-light")
      dark_btn.forEach(element => {
        (element as HTMLElement).style.display = "block";
      });
    }
    else if (this.router.url == '/index-apps') {
      document.querySelector('.app-header').classList.remove('d-none');
    }
    else {
      var light_btn = document.querySelectorAll(".login-btn-primary")
      light_btn.forEach(element => {
        (element as HTMLElement).style.display = "block";
      });

      var dark_btn = document.querySelectorAll(".login-btn-light")
      dark_btn.forEach(element => {
        (element as HTMLElement).style.display = "none";
      });
      
    }

    setTimeout(() => {
      this._activateMenuDropdown();
          }, 0);
  }

  jqueryInit(){

  

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
	
		$('.drpdownbuttonsubmenu').on('click', function(e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');
			
			if ($(target).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//3rd Level Nav
		$('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');
			
			if ($(targetInner).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');

		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
				$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
        	}
	    });
		
	
	
	}
	
	
  }
   onLogout() {
        this.acct.logout().subscribe((result) => {
            console.log('Logged Out Successfully');
        });

        this.router.navigate(['/auth-login']);
    }

    loadMenu() {
      this.menu$ = this.menuservice.getMenus();
      this.menu$.subscribe((menuList) => {
        console.log(menuList);
          this.menus = menuList;
      });
  }

  _activateMenuDropdown() {
    /**
     * Menu activation reset
     */
    const resetParent = (el) => {
      el.classList.remove("active");
      const parent = el.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.remove("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.remove("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.remove("active");

            }
          }
        }
      }
    };

    let links = document.getElementsByClassName("nav-link-ref");
    let matchingMenuItem = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // reset menu
      resetParent(links[i]);
    }
    for (let i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i]["pathname"]) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      const parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");

              document.body.classList.remove('mobile-menu-visible');
            }
          }
        }
      }
    }
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav").classList.add("nav-sticky");

    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
      }
    if (document.getElementById("back-to-top")) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }
  /**
   * Toggle menu
   */
  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById("navigation").style.display = "block";
    } else {
      document.getElementById("navigation").style.display = "none";
    }
  }

  /**
   * Menu clicked show the submenu
   */
  onMenuClick(event) {
    event.preventDefault();
      const nextEl = event.target.previousSibling;
      if (nextEl.style.display === "none") {
        nextEl.style.display = "block";
      } else {
        nextEl.style.display = "none";
      }
  }

 
  onMenuClickWithLink(event,link) {
    if(link==null){
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;
      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("open");
        }
        nextEl.classList.add("open");
      } else if (nextEl) {
        nextEl.classList.remove("open");
      }
      return false;
    }
    return;
  }

  developerModal(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  wishListModal(content) {
    this.modalService.open(content, { centered: true });
  }

  // Demo Offcanvas
  openright(content: TemplateRef<any>) {  
    this.offcanvasService.open(content, { position: 'end' });
  }

}
