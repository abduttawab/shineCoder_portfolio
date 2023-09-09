import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';

import { SimplebarAngularModule } from 'simplebar-angular';


import { SharedModule } from "./shared/shared.module";

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AccountMembersComponent } from './core/components/account-members/account-members.component';
import { AccountMessagesComponent } from './core/components/account-messages/account-messages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { AccountPaymentsComponent } from './core/components/account-payments/account-payments.component';
import { AccountProfileComponent } from './core/components/account-profile/account-profile.component';
import { AccountSettingComponent } from './core/components/account-setting/account-setting.component';
import { AccountWorksComponent } from './core/components/account-works/account-works.component';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthLoginThreeComponent } from './auth/auth-login-three/auth-login-three.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthRePasswordThreeComponent } from './auth/auth-re-password-three/auth-re-password-three.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthSignupThreeComponent } from './auth/auth-signup-three/auth-signup-three.component';
import { ChangelogComponent } from './core/components/changelog/changelog.component';
import { ComponentsComponent } from './core/components/components/components.component';
import { DocumentationComponent } from './core/components/documentation/documentation.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { ForumsComponent } from './core/components/forums/forums.component';
import { ForumsCommentsComponent } from './core/components/forums-comments/forums-comments.component';
import { ForumsTopicComponent } from './core/components/forums-topic/forums-topic.component';
import { HelpcenterFaqsComponent } from './core/components/helpcenter-faqs/helpcenter-faqs.component';
import { HelpcenterGuidesComponent } from './core/components/helpcenter-guides/helpcenter-guides.component';
import { HelpcenterOverviewComponent } from './core/components/helpcenter-overview/helpcenter-overview.component';
import { HelpcenterSupportRequestComponent } from './core/components/helpcenter-support-request/helpcenter-support-request.component';
import { IndexComponent } from './core/components/index/index.component';
import { IndexAgencyComponent } from './core/components/index-agency/index-agency.component';
import { IndexAppsComponent } from './core/components/index-apps/index-apps.component';
import { IndexBlogComponent } from './core/components/index-blog/index-blog.component';
import { IndexBusinessComponent } from './core/components/index-business/index-business.component';
import { IndexCarRidingComponent } from './core/components/index-car-riding/index-car-riding.component';
import { IndexClassicAppComponent } from './core/components/index-classic-app/index-classic-app.component';
import { IndexClassicSaasComponent } from './core/components/index-classic-saas/index-classic-saas.component';
import { IndexCorporateComponent } from './core/components/index-corporate/index-corporate.component';
import { IndexCourseComponent } from './core/components/index-course/index-course.component';
import { IndexCoworkingComponent } from './core/components/index-coworking/index-coworking.component';
import { IndexCryptoComponent } from './core/components/index-crypto/index-crypto.component';
import { IndexCustomerComponent } from './core/components/index-customer/index-customer.component';
import { IndexDigitalAgencyComponent } from './core/components/index-digital-agency/index-digital-agency.component';
import { IndexEbookComponent } from './core/components/index-ebook/index-ebook.component';
import { IndexEmailInboxComponent } from './core/components/index-email-inbox/index-email-inbox.component';
import { IndexEnterpriseComponent } from './core/components/index-enterprise/index-enterprise.component';
import { IndexEventComponent } from './core/components/index-event/index-event.component';
import { IndexHostingComponent } from './core/components/index-hosting/index-hosting.component';
import { IndexHotelComponent } from './core/components/index-hotel/index-hotel.component';
import { IndexInsuranceComponent } from './core/components/index-insurance/index-insurance.component';
import { IndexItSolutionComponent } from './core/components/index-it-solution/index-it-solution.component';
import { IndexJobComponent } from './core/components/index-job/index-job.component';
import { IndexLandingOneComponent } from './core/components/index-landing-one/index-landing-one.component';
import { IndexLandingThreeComponent } from './core/components/index-landing-three/index-landing-three.component';
import { IndexLandingTwoComponent } from './core/components/index-landing-two/index-landing-two.component';
import { IndexMarketingComponent } from './core/components/index-marketing/index-marketing.component';
import { IndexModernBusinessComponent } from './core/components/index-modern-business/index-modern-business.component';
import { IndexOnepageComponent } from './core/components/index-onepage/index-onepage.component';
import { IndexPaymentsComponent } from './core/components/index-payments/index-payments.component';
import { IndexPersonalComponent } from './core/components/index-personal/index-personal.component';
import { IndexPortfolioComponent } from './core/components/index-portfolio/index-portfolio.component';
import { IndexSaasComponent } from './core/components/index-saas/index-saas.component';
import { IndexServicesComponent } from './core/components/index-services/index-services.component';
import { IndexShopComponent } from './core/components/index-shop/index-shop.component';
import { IndexSingleProductComponent } from './core/components/index-single-product/index-single-product.component';
import { IndexSocialMarketingComponent } from './core/components/index-social-marketing/index-social-marketing.component';
import { IndexSoftwareComponent } from './core/components/index-software/index-software.component';
import { IndexStudioComponent } from './core/components/index-studio/index-studio.component';
import { IndexTaskManagementComponent } from './core/components/index-task-management/index-task-management.component';
import { IndexTravelComponent } from './core/components/index-travel/index-travel.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageAboutusTwoComponent } from './core/components/page-aboutus-two/page-aboutus-two.component';
import { PageBlogDetailComponent } from './core/components/page-blog-detail/page-blog-detail.component';
import { PageBlogGridComponent } from './core/components/page-blog-grid/page-blog-grid.component';
import { PageBlogListComponent } from './core/components/page-blog-list/page-blog-list.component';
import { PageBlogListSidebarComponent } from './core/components/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageBlogSidebarComponent } from './core/components/page-blog-sidebar/page-blog-sidebar.component';
import { PageCaseDetailComponent } from './core/components/page-case-detail/page-case-detail.component';
import { PageCasesComponent } from './core/components/page-cases/page-cases.component';
import { PageComingsoonComponent } from './core/components/page-comingsoon/page-comingsoon.component';
import { PageComingsoon2Component } from './core/components/page-comingsoon2/page-comingsoon2.component';
import { PageContactDetailComponent } from './core/components/page-contact-detail/page-contact-detail.component';
import { PageContactOneComponent } from './core/components/page-contact-one/page-contact-one.component';
import { PageContactThreeComponent } from './core/components/page-contact-three/page-contact-three.component';
import { PageContactTwoComponent } from './core/components/page-contact-two/page-contact-two.component';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { PageHistoryComponent } from './core/components/page-history/page-history.component';
import { PageInvoiceComponent } from './core/components/page-invoice/page-invoice.component';
import { PageJobApplyComponent } from './core/components/page-job-apply/page-job-apply.component';
import { PageJobCandidateComponent } from './core/components/page-job-candidate/page-job-candidate.component';
import { PageJobCompanyComponent } from './core/components/page-job-company/page-job-company.component';
import { PageJobDetailComponent } from './core/components/page-job-detail/page-job-detail.component';
import { PageJobsComponent } from './core/components/page-jobs/page-jobs.component';
import { PageJobsSidebarComponent } from './core/components/page-jobs-sidebar/page-jobs-sidebar.component';
import { PageMaintenanceComponent } from './core/components/page-maintenance/page-maintenance.component';
import { PagePricingComponent } from './core/components/page-pricing/page-pricing.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { PageTeamComponent } from './core/components/page-team/page-team.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';
import { PageWorkClassicComponent } from './core/components/page-work-classic/page-work-classic.component';
import { PageWorkDetailComponent } from './core/components/page-work-detail/page-work-detail.component';
import { PageWorkGridComponent } from './core/components/page-work-grid/page-work-grid.component';
import { PageWorkMasonryComponent } from './core/components/page-work-masonry/page-work-masonry.component';
import { PageWorkModernComponent } from './core/components/page-work-modern/page-work-modern.component';
import { PageBlogDetailTwoComponent } from './core/components/page-blog-detail-two/page-blog-detail-two.component';
import { ShopCartComponent } from './core/components/shop-cart/shop-cart.component';
import { ShopCheckoutsComponent } from './core/components/shop-checkouts/shop-checkouts.component';
import { ShopMyaccountComponent } from './core/components/shop-myaccount/shop-myaccount.component';
import { ShopProductDetailComponent } from './core/components/shop-product-detail/shop-product-detail.component';
import { ShopProductsComponent } from './core/components/shop-products/shop-products.component';
import { WidgetComponent } from './core/components/widget/widget.component';
import { FeatherModule } from 'angular-feather';

// Apex chart
import { NgApexchartsModule } from 'ng-apexcharts';

import { allIcons } from 'angular-feather/icons';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { IndexOnlineLearningComponent } from './core/components/index-online-learning/index-online-learning.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexConstructionComponent } from './core/components/index-construction/index-construction.component';
import { IndexRealEstateComponent } from './core/components/index-real-estate/index-real-estate.component';
import { IndexDeveloperComponent } from './core/components/index-developer/index-developer.component';
import { IndexSeoAgencyComponent } from './core/components/index-seo-agency/index-seo-agency.component';
import { IndexHospitalComponent } from './core/components/index-hospital/index-hospital.component';
import { IndexFinanceComponent } from './core/components/index-finance/index-finance.component';
import { IndexVideocallComponent } from './core/components/index-videocall/index-videocall.component';
import { IndexItSolutionTwoComponent } from './core/components/index-it-solution-two/index-it-solution-two.component';
import { IndexFreelancerComponent } from './core/components/index-freelancer/index-freelancer.component';
import { IndexBlockchainComponent } from './core/components/index-blockchain/index-blockchain.component';
import { IndexCryptoTwoComponent } from './core/components/index-crypto-two/index-crypto-two.component';
import { IndexIntegrationComponent } from './core/components/index-integration/index-integration.component';
import { IndexLandingFourComponent } from './core/components/index-landing-four/index-landing-four.component';
import { ShopListsComponent } from './core/components/shop-lists/shop-lists.component';
import { PageJobCompanyListComponent } from './core/components/page-job-company-list/page-job-company-list.component';
import { PageJobCandidateListComponent } from './core/components/page-job-candidate-list/page-job-candidate-list.component';
import { PageThankyouComponent } from './core/components/page-thankyou/page-thankyou.component';
import { PortfolioModernTwoComponent } from './core/components/portfolio-modern-two/portfolio-modern-two.component';
import { PortfolioModernThreeComponent } from './core/components/portfolio-modern-three/portfolio-modern-three.component';
import { PortfolioModernFourComponent } from './core/components/portfolio-modern-four/portfolio-modern-four.component';
import { PortfolioModernFiveComponent } from './core/components/portfolio-modern-five/portfolio-modern-five.component';
import { PortfolioModernSixComponent } from './core/components/portfolio-modern-six/portfolio-modern-six.component';
import { PortfolioClassicTwoComponent } from './core/components/portfolio-classic-two/portfolio-classic-two.component';
import { PortfolioClassicThreeComponent } from './core/components/portfolio-classic-three/portfolio-classic-three.component';
import { PortfolioClassicFourComponent } from './core/components/portfolio-classic-four/portfolio-classic-four.component';
import { PortfolioClassicFiveComponent } from './core/components/portfolio-classic-five/portfolio-classic-five.component';
import { PortfolioClassicSixComponent } from './core/components/portfolio-classic-six/portfolio-classic-six.component';
import { PortfolioGridTwoComponent } from './core/components/portfolio-grid-two/portfolio-grid-two.component';
import { PortfolioGridThreeComponent } from './core/components/portfolio-grid-three/portfolio-grid-three.component';
import { PortfolioGridFourComponent } from './core/components/portfolio-grid-four/portfolio-grid-four.component';
import { PortfolioGridFiveComponent } from './core/components/portfolio-grid-five/portfolio-grid-five.component';
import { PortfolioGridSixComponent } from './core/components/portfolio-grid-six/portfolio-grid-six.component';
import { PortfolioMasonryTwoComponent } from './core/components/portfolio-masonry-two/portfolio-masonry-two.component';
import { PortfolioMasonryThreeComponent } from './core/components/portfolio-masonry-three/portfolio-masonry-three.component';
import { PortfolioMasonryFourComponent } from './core/components/portfolio-masonry-four/portfolio-masonry-four.component';
import { PortfolioMasonryFiveComponent } from './core/components/portfolio-masonry-five/portfolio-masonry-five.component';
import { PortfolioMasonrySixComponent } from './core/components/portfolio-masonry-six/portfolio-masonry-six.component';
import { PortfolioDetailOneComponent } from './core/components/portfolio-detail-one/portfolio-detail-one.component';
import { PortfolioDetailTwoComponent } from './core/components/portfolio-detail-two/portfolio-detail-two.component';
import { PortfolioDetailThreeComponent } from './core/components/portfolio-detail-three/portfolio-detail-three.component';
import { PortfolioDetailFourComponent } from './core/components/portfolio-detail-four/portfolio-detail-four.component';
import { CorporateAboutComponent } from './core/components/corporate-about/corporate-about.component';
import { CorporateServicesComponent } from './core/components/corporate-services/corporate-services.component';
import { CorporateTeamComponent } from './core/components/corporate-team/corporate-team.component';
import { CorporatePricingComponent } from './core/components/corporate-pricing/corporate-pricing.component';
import { CorporateBlogComponent } from './core/components/corporate-blog/corporate-blog.component';
import { CorporateBlogDetailComponent } from './core/components/corporate-blog-detail/corporate-blog-detail.component';
import { CryptoAboutComponent } from './core/components/crypto-about/crypto-about.component';
import { CryptoMarketComponent } from './core/components/crypto-market/crypto-market.component';
import { CryptoTokenComponent } from './core/components/crypto-token/crypto-token.component';
import { CryptoServicesComponent } from './core/components/crypto-services/crypto-services.component';
import { CryptoFaqsComponent } from './core/components/crypto-faqs/crypto-faqs.component';
import { CryptoWhitepaperComponent } from './core/components/crypto-whitepaper/crypto-whitepaper.component';
import { CryptoBlogComponent } from './core/components/crypto-blog/crypto-blog.component';
import { CryptoBlogDetailComponent } from './core/components/crypto-blog-detail/crypto-blog-detail.component';
import { ShopAboutusComponent } from './core/components/shop-aboutus/shop-aboutus.component';
import { ShopFullwidthGridsComponent } from './core/components/shop-fullwidth-grids/shop-fullwidth-grids.component';
import { ShopGridsComponent } from './core/components/shop-grids/shop-grids.component';
import { ShopFullwidthListsComponent } from './core/components/shop-fullwidth-lists/shop-fullwidth-lists.component';
import { ShopBlogComponent } from './core/components/shop-blog/shop-blog.component';
import { ShopBlogDetailComponent } from './core/components/shop-blog-detail/shop-blog-detail.component';
import { PortfolioAboutComponent } from './core/components/portfolio-about/portfolio-about.component';
import { PortfolioServiceComponent } from './core/components/portfolio-service/portfolio-service.component';
import { HostingDomainComponent } from './core/components/hosting-domain/hosting-domain.component';
import { HostingSharedComponent } from './core/components/hosting-shared/hosting-shared.component';
import { HostingVpsComponent } from './core/components/hosting-vps/hosting-vps.component';
import { HostingDedicatedComponent } from './core/components/hosting-dedicated/hosting-dedicated.component';
import { HostingCloudComponent } from './core/components/hosting-cloud/hosting-cloud.component';
import { HostingResellerComponent } from './core/components/hosting-reseller/hosting-reseller.component';
import { HostingAboutusComponent } from './core/components/hosting-aboutus/hosting-aboutus.component';
import { HostingServicesComponent } from './core/components/hosting-services/hosting-services.component';
import { HostingFaqsComponent } from './core/components/hosting-faqs/hosting-faqs.component';
import { HostingBlogComponent } from './core/components/hosting-blog/hosting-blog.component';
import { HostingBlogDetailComponent } from './core/components/hosting-blog-detail/hosting-blog-detail.component';
import { JobListOneComponent } from './core/components/job-list-one/job-list-one.component';
import { JobListTwoComponent } from './core/components/job-list-two/job-list-two.component';
import { JobListThreeComponent } from './core/components/job-list-three/job-list-three.component';
import { JobListFourComponent } from './core/components/job-list-four/job-list-four.component';
import { JobListFiveComponent } from './core/components/job-list-five/job-list-five.component';
import { JobDetailOneComponent } from './core/components/job-detail-one/job-detail-one.component';
import { JobDetailTwoComponent } from './core/components/job-detail-two/job-detail-two.component';
import { JobDetailThreeComponent } from './core/components/job-detail-three/job-detail-three.component';
import { JobApplyComponent } from './core/components/job-apply/job-apply.component';
import { JobCandidateListComponent } from './core/components/job-candidate-list/job-candidate-list.component';
import { JobCandidateComponent } from './core/components/job-candidate/job-candidate.component';
import { JobCompanyListComponent } from './core/components/job-company-list/job-company-list.component';
import { JobCompanyComponent } from './core/components/job-company/job-company.component';
import { JobAboutComponent } from './core/components/job-about/job-about.component';
import { JobPriceComponent } from './core/components/job-price/job-price.component';
import { JobFaqsComponent } from './core/components/job-faqs/job-faqs.component';
import { BlogAboutComponent } from './core/components/blog-about/blog-about.component';
import { BlogStandardPostComponent } from './core/components/blog-standard-post/blog-standard-post.component';
import { BlogSliderPostComponent } from './core/components/blog-slider-post/blog-slider-post.component';
import { BlogGalleryPostComponent } from './core/components/blog-gallery-post/blog-gallery-post.component';
import { BlogYoutubePostComponent } from './core/components/blog-youtube-post/blog-youtube-post.component';
import { BlogVimeoPostComponent } from './core/components/blog-vimeo-post/blog-vimeo-post.component';
import { BlogAudioPostComponent } from './core/components/blog-audio-post/blog-audio-post.component';
import { BlogBlockquotePostComponent } from './core/components/blog-blockquote-post/blog-blockquote-post.component';
import { BlogLeftSidebarPostComponent } from './core/components/blog-left-sidebar-post/blog-left-sidebar-post.component';
import { IndexNftComponent } from './core/components/index-nft/index-nft.component';
import { NftExploreComponent } from './core/components/nft-explore/nft-explore.component';
import { NftCreatorsComponent } from './core/components/nft-creators/nft-creators.component';
import { CourseDetailComponent } from './core/components/course-detail/course-detail.component';
import { AuthBsLoginComponent } from './auth/auth-bs-login/auth-bs-login.component';
import { AuthLoginBgVideoComponent } from './auth/auth-login-bg-video/auth-login-bg-video.component';
import { AuthBsSignupComponent } from './auth/auth-bs-signup/auth-bs-signup.component';
import { AuthSignupBgVideoComponent } from './auth/auth-signup-bg-video/auth-signup-bg-video.component';
import { PageFooterComponent } from './core/components/page-footer/page-footer.component';
import { IndexLogisticsComponent } from './core/components/index-logistics/index-logistics.component';
import { UiButtonComponent } from './core/components/ui-button/ui-button.component';
import { UiAlertComponent } from './core/components/ui-alert/ui-alert.component';
import { UiTypographyComponent } from './core/components/ui-typography/ui-typography.component';
import { UiDropdownComponent } from './core/components/ui-dropdown/ui-dropdown.component';
import { UiBackgroundComponent } from './core/components/ui-background/ui-background.component';
import { UiTextComponent } from './core/components/ui-text/ui-text.component';
import { UiBadgesComponent } from './core/components/ui-badges/ui-badges.component';
import { UiAccordionComponent } from './core/components/ui-accordion/ui-accordion.component';
import { UiCardComponent } from './core/components/ui-card/ui-card.component';
import { UiShadowComponent } from './core/components/ui-shadow/ui-shadow.component';
import { UiBorderComponent } from './core/components/ui-border/ui-border.component';
import { UiCarouselComponent } from './core/components/ui-carousel/ui-carousel.component';
import { UiFormComponent } from './core/components/ui-form/ui-form.component';
import { UiBreadcrumbComponent } from './core/components/ui-breadcrumb/ui-breadcrumb.component';
import { UiPaginationComponent } from './core/components/ui-pagination/ui-pagination.component';
import { UiAvatarComponent } from './core/components/ui-avatar/ui-avatar.component';
import { UiNavTabsComponent } from './core/components/ui-nav-tabs/ui-nav-tabs.component';
import { UiModalsComponent } from './core/components/ui-modals/ui-modals.component';
import { UiTablesComponent } from './core/components/ui-tables/ui-tables.component';
import { UiIconsComponent } from './core/components/ui-icons/ui-icons.component';
import { UiProgressbarComponent } from './core/components/ui-progressbar/ui-progressbar.component';
import { UiLightboxComponent } from './core/components/ui-lightbox/ui-lightbox.component';
import { UiTooltipPopoverComponent } from './core/components/ui-tooltip-popover/ui-tooltip-popover.component';
import { AccountChatComponent } from './core/components/account-chat/account-chat.component';
import { AuthBsResetComponent } from './auth/auth-bs-reset/auth-bs-reset.component';
import { AuthResetPasswordBgVideoComponent } from './auth/auth-reset-password-bg-video/auth-reset-password-bg-video.component';



import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './services/auth-guard.service';
import { AboutUsComponent } from './custom/about-us/about-us.component';
import { ContactUsComponent } from './custom/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './custom/forgot-password/forgot-password.component';
import { HomeComponent } from './custom/home/home.component';
import { RegisterComponent } from './custom/register/register.component';
import { SendCodeComponent } from './custom/send-code/send-code.component';
import { NavMenuComponent } from './custom/nav-menu/nav-menu.component';
import { TermsComponent } from './custom/terms/terms.component';
import { ValidateCodeComponent } from './custom/validate-code/validate-code.component';
import { UserComponent } from './custom/user/user.component';

import * as $ from 'jquery';
import 'jquery-modal';
// import 'jqueryui';
// import 'chosen-js';

import datepickerFactory from 'jquery-datepicker';
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-ja';
import { CustomHeaderComponent } from './navigation/customheader.component';
import { InnerPageDetailComponent } from './core/components/inner-page-detail/inner-page-detail.component';
import { InnerPageListComponent } from './core/components/inner-page-list/inner-page-list.component';

 
//declare const $: any; // avoid the error on $(this.eInput).datepicker();
datepickerFactory($);
datepickerJAFactory($);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountMembersComponent,
    AccountMessagesComponent,
    LoginComponent,
    RegistrationComponent,
    MasterPageComponent,
    AccountPaymentsComponent,
    AccountProfileComponent,
    AccountSettingComponent,
    AccountWorksComponent,
    AuthCoverLoginComponent,
    AuthCoverRePasswordComponent,
    AuthCoverSignupComponent,
    AuthLoginComponent,
    AuthLoginThreeComponent,
    AuthRePasswordComponent,
    AuthRePasswordThreeComponent,
    AuthSignupComponent,
    AuthSignupThreeComponent,
    ChangelogComponent,
    ComponentsComponent,
    DocumentationComponent,
    EmailAlertComponent,
    EmailConfirmationComponent,
    EmailInvoiceComponent,
    EmailPasswordResetComponent,
    ForumsComponent,
    ForumsCommentsComponent,
    ForumsTopicComponent,
    HelpcenterFaqsComponent,
    HelpcenterGuidesComponent,
    HelpcenterOverviewComponent,
    HelpcenterSupportRequestComponent,
    IndexComponent,
    IndexAgencyComponent,
    IndexAppsComponent,
    IndexBlogComponent,
    IndexBusinessComponent,
    IndexCarRidingComponent,
    IndexClassicAppComponent,
    IndexClassicSaasComponent,
    IndexCorporateComponent,
    IndexCourseComponent,
    IndexCoworkingComponent,
    IndexCryptoComponent,
    IndexCustomerComponent,
    IndexDigitalAgencyComponent,
    IndexEbookComponent,
    IndexEmailInboxComponent,
    IndexEnterpriseComponent,
    IndexEventComponent,
    IndexHostingComponent,
    IndexHotelComponent,
    IndexInsuranceComponent,
    IndexItSolutionComponent,
    IndexJobComponent,
    IndexLandingOneComponent,
    IndexLandingThreeComponent,
    IndexLandingTwoComponent,
    IndexMarketingComponent,
    IndexModernBusinessComponent,
    IndexOnepageComponent,
    IndexOnlineLearningComponent,
    IndexPaymentsComponent,
    IndexPersonalComponent,
    IndexPortfolioComponent,
    IndexSaasComponent,
    IndexServicesComponent,
    IndexShopComponent,
    IndexSingleProductComponent,
    IndexSocialMarketingComponent,
    IndexSoftwareComponent,
    IndexStudioComponent,
    IndexTaskManagementComponent,
    IndexTravelComponent,
    PageAboutusComponent,
    PageAboutusTwoComponent,
    PageBlogDetailComponent,
    PageBlogGridComponent,
    PageBlogListComponent,
    PageBlogListSidebarComponent,
    PageBlogSidebarComponent,
    PageCaseDetailComponent,
    PageCasesComponent,
    PageComingsoonComponent,
    PageComingsoon2Component,
    PageContactDetailComponent,
    PageContactOneComponent,
    PageContactThreeComponent,
    PageContactTwoComponent,
    PageErrorComponent,
    PageHistoryComponent,
    PageInvoiceComponent,
    PageJobApplyComponent,
    PageJobCandidateComponent,
    PageJobCompanyComponent,
    PageJobDetailComponent,
    PageJobsComponent,
    PageJobsSidebarComponent,
    PageMaintenanceComponent,
    PagePricingComponent,
    PagePrivacyComponent,
    PageServicesComponent,
    PageTeamComponent,
    PageTermsComponent,
    PageWorkClassicComponent,
    PageWorkDetailComponent,
    PageWorkGridComponent,
    PageWorkMasonryComponent,
    PageWorkModernComponent,
    PageBlogDetailTwoComponent,
    ShopCartComponent,
    ShopCheckoutsComponent,
    ShopMyaccountComponent,
    ShopProductDetailComponent,
    ShopProductsComponent,
    WidgetComponent,
    SwitcherComponent,
    IndexConstructionComponent,
    IndexRealEstateComponent,
    IndexDeveloperComponent,
    IndexSeoAgencyComponent,
    IndexHospitalComponent,
    IndexFinanceComponent,
    IndexVideocallComponent,
    IndexItSolutionTwoComponent,
    IndexFreelancerComponent,
    IndexBlockchainComponent,
    IndexCryptoTwoComponent,
    IndexIntegrationComponent,
    IndexLandingFourComponent,
    ShopListsComponent,
    PageJobCompanyListComponent,
    PageJobCandidateListComponent,
    PageThankyouComponent,
    PortfolioModernTwoComponent,
    PortfolioModernThreeComponent,
    PortfolioModernFourComponent,
    PortfolioModernFiveComponent,
    PortfolioModernSixComponent,
    PortfolioClassicTwoComponent,
    PortfolioClassicThreeComponent,
    PortfolioClassicFourComponent,
    PortfolioClassicFiveComponent,
    PortfolioClassicSixComponent,
    PortfolioGridTwoComponent,
    PortfolioGridThreeComponent,
    PortfolioGridFourComponent,
    PortfolioGridFiveComponent,
    PortfolioGridSixComponent,
    PortfolioMasonryTwoComponent,
    PortfolioMasonryThreeComponent,
    PortfolioMasonryFourComponent,
    PortfolioMasonryFiveComponent,
    PortfolioMasonrySixComponent,
    PortfolioDetailOneComponent,
    PortfolioDetailTwoComponent,
    PortfolioDetailThreeComponent,
    PortfolioDetailFourComponent,
    CorporateAboutComponent,
    CorporateServicesComponent,
    CorporateTeamComponent,
    CorporatePricingComponent,
    CorporateBlogComponent,
    CorporateBlogDetailComponent,
    CryptoAboutComponent,
    CryptoMarketComponent,
    CryptoTokenComponent,
    CryptoServicesComponent,
    CryptoFaqsComponent,
    CryptoWhitepaperComponent,
    CryptoBlogComponent,
    CryptoBlogDetailComponent,
    ShopAboutusComponent,
    ShopFullwidthGridsComponent,
    ShopGridsComponent,
    ShopFullwidthListsComponent,
    ShopBlogComponent,
    ShopBlogDetailComponent,
    PortfolioAboutComponent,
    PortfolioServiceComponent,
    HostingDomainComponent,
    HostingSharedComponent,
    HostingVpsComponent,
    HostingDedicatedComponent,
    HostingCloudComponent,
    HostingResellerComponent,
    HostingAboutusComponent,
    HostingServicesComponent,
    HostingFaqsComponent,
    HostingBlogComponent,
    HostingBlogDetailComponent,
    JobListOneComponent,
    JobListTwoComponent,
    JobListThreeComponent,
    JobListFourComponent,
    JobListFiveComponent,
    JobDetailOneComponent,
    JobDetailTwoComponent,
    JobDetailThreeComponent,
    JobApplyComponent,
    JobCandidateListComponent,
    JobCandidateComponent,
    JobCompanyListComponent,
    JobCompanyComponent,
    JobAboutComponent,
    JobPriceComponent,
    JobFaqsComponent,
    BlogAboutComponent,
    BlogStandardPostComponent,
    BlogSliderPostComponent,
    BlogGalleryPostComponent,
    BlogYoutubePostComponent,
    BlogVimeoPostComponent,
    BlogAudioPostComponent,
    BlogBlockquotePostComponent,
    BlogLeftSidebarPostComponent,
    IndexNftComponent,
    NftExploreComponent,
    NftCreatorsComponent,
    CourseDetailComponent,
    AuthBsLoginComponent,
    AuthLoginBgVideoComponent,
    AuthBsSignupComponent,
    AuthSignupBgVideoComponent,
    PageFooterComponent,
    IndexLogisticsComponent,
    UiButtonComponent,
    UiAlertComponent,
    UiTypographyComponent,
    UiDropdownComponent,
    UiBackgroundComponent,
    UiTextComponent,
    UiBadgesComponent,
    UiAccordionComponent,
    UiCardComponent,
    UiShadowComponent,
    UiBorderComponent,
    UiCarouselComponent,
    UiFormComponent,
    UiBreadcrumbComponent,
    UiPaginationComponent,
    UiAvatarComponent,
    UiNavTabsComponent,
    UiModalsComponent,
    UiTablesComponent,
    UiIconsComponent,
    UiProgressbarComponent,
    UiLightboxComponent,
    UiTooltipPopoverComponent,
    AccountChatComponent,
    AuthBsResetComponent,
    AuthResetPasswordBgVideoComponent,

    CustomHeaderComponent,



//////

AboutUsComponent,
        ContactUsComponent,
        ForgotPasswordComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SendCodeComponent,
        TermsComponent,
        ValidateCodeComponent,
        UserComponent,
        NavMenuComponent,

        InnerPageListComponent,
        InnerPageDetailComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], {}),
    NgxYoutubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    NgApexchartsModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule,
    SimplebarAngularModule,

   

/////////////////

    HttpClientModule,
    ToastrModule.forRoot()
  ],
  exports: [
    FeatherModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthGuardService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
