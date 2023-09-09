import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { AuthLoginThreeComponent } from './auth/auth-login-three/auth-login-three.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRePasswordThreeComponent } from './auth/auth-re-password-three/auth-re-password-three.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthSignupThreeComponent } from './auth/auth-signup-three/auth-signup-three.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';

import { AccountMembersComponent } from './core/components/account-members/account-members.component';
import { AccountMessagesComponent } from './core/components/account-messages/account-messages.component';
import { AccountPaymentsComponent } from './core/components/account-payments/account-payments.component';
import { AccountProfileComponent } from './core/components/account-profile/account-profile.component';
import { AccountSettingComponent } from './core/components/account-setting/account-setting.component';
import { AccountWorksComponent } from './core/components/account-works/account-works.component';
import { ChangelogComponent } from './core/components/changelog/changelog.component';
import { ComponentsComponent } from './core/components/components/components.component';
import { DocumentationComponent } from './core/components/documentation/documentation.component';
import { ForumsCommentsComponent } from './core/components/forums-comments/forums-comments.component';
import { ForumsTopicComponent } from './core/components/forums-topic/forums-topic.component';
import { ForumsComponent } from './core/components/forums/forums.component';
import { HelpcenterFaqsComponent } from './core/components/helpcenter-faqs/helpcenter-faqs.component';
import { HelpcenterGuidesComponent } from './core/components/helpcenter-guides/helpcenter-guides.component';
import { HelpcenterOverviewComponent } from './core/components/helpcenter-overview/helpcenter-overview.component';
import { HelpcenterSupportRequestComponent } from './core/components/helpcenter-support-request/helpcenter-support-request.component';
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
import { IndexInsuranceComponent } from './core/components/index-insurance/index-insurance.component';
import { IndexItSolutionComponent } from './core/components/index-it-solution/index-it-solution.component';
import { IndexJobComponent } from './core/components/index-job/index-job.component';
import { IndexLandingOneComponent } from './core/components/index-landing-one/index-landing-one.component';
import { IndexLandingThreeComponent } from './core/components/index-landing-three/index-landing-three.component';
import { IndexLandingTwoComponent } from './core/components/index-landing-two/index-landing-two.component';
import { IndexLandingFourComponent } from './core/components/index-landing-four/index-landing-four.component';
import { IndexMarketingComponent } from './core/components/index-marketing/index-marketing.component';
import { IndexModernBusinessComponent } from './core/components/index-modern-business/index-modern-business.component';
import { IndexOnepageComponent } from './core/components/index-onepage/index-onepage.component';
import { IndexOnlineLearningComponent } from './core/components/index-online-learning/index-online-learning.component';
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
import { IndexComponent } from './core/components/index/index.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageAboutusTwoComponent } from './core/components/page-aboutus-two/page-aboutus-two.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageBlogDetailTwoComponent } from './core/components/page-blog-detail-two/page-blog-detail-two.component';
import { PageBlogDetailComponent } from './core/components/page-blog-detail/page-blog-detail.component';
import { PageBlogGridComponent } from './core/components/page-blog-grid/page-blog-grid.component';
import { PageBlogListSidebarComponent } from './core/components/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageBlogListComponent } from './core/components/page-blog-list/page-blog-list.component';
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
import { PageThankyouComponent } from './core/components/page-thankyou/page-thankyou.component';
import { PageHistoryComponent } from './core/components/page-history/page-history.component';
import { PageInvoiceComponent } from './core/components/page-invoice/page-invoice.component';
import { PageJobApplyComponent } from './core/components/page-job-apply/page-job-apply.component';
import { PageJobCandidateComponent } from './core/components/page-job-candidate/page-job-candidate.component';
import { PageJobCompanyComponent } from './core/components/page-job-company/page-job-company.component';
import { PageJobDetailComponent } from './core/components/page-job-detail/page-job-detail.component';
import { PageJobsSidebarComponent } from './core/components/page-jobs-sidebar/page-jobs-sidebar.component';
import { PageJobsComponent } from './core/components/page-jobs/page-jobs.component';
import { PageJobCompanyListComponent } from './core/components/page-job-company-list/page-job-company-list.component';
import { PageJobCandidateListComponent } from './core/components/page-job-candidate-list/page-job-candidate-list.component';
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
import { ShopCartComponent } from './core/components/shop-cart/shop-cart.component';
import { ShopCheckoutsComponent } from './core/components/shop-checkouts/shop-checkouts.component';
import { ShopMyaccountComponent } from './core/components/shop-myaccount/shop-myaccount.component';
import { ShopProductDetailComponent } from './core/components/shop-product-detail/shop-product-detail.component';
import { ShopProductsComponent } from './core/components/shop-products/shop-products.component';
import { ShopListsComponent } from './core/components/shop-lists/shop-lists.component';
import { WidgetComponent } from './core/components/widget/widget.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
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
import { combineLatest } from 'rxjs/operators';
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
import { UiFormComponent } from './core/components/ui-form/ui-form.component';
import { AccountChatComponent } from './core/components/account-chat/account-chat.component';
import { AuthBsResetComponent } from './auth/auth-bs-reset/auth-bs-reset.component';
import { AuthResetPasswordBgVideoComponent } from './auth/auth-reset-password-bg-video/auth-reset-password-bg-video.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutUsComponent } from './custom/about-us/about-us.component';
import { ContactUsComponent } from './custom/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './custom/forgot-password/forgot-password.component';
import { HomeComponent } from './custom/home/home.component';
import { RegisterComponent } from './custom/register/register.component';
import { SendCodeComponent } from './custom/send-code/send-code.component';
import { TermsComponent } from './custom/terms/terms.component';
import { ValidateCodeComponent } from './custom/validate-code/validate-code.component';
import { InnerPageListComponent } from './core/components/inner-page-list/inner-page-list.component';
import { InnerPageDetailComponent } from './core/components/inner-page-detail/inner-page-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'account-messages', component: AccountMessagesComponent },
      { path: 'account-members', component: AccountMembersComponent },
      { path: 'account-payments', component: AccountPaymentsComponent },
      { path: 'account-profile', component: AccountProfileComponent },
      { path: 'account-setting', component: AccountSettingComponent },
      { path: 'account-works', component: AccountWorksComponent },
      { path: 'account-chat', component: AccountChatComponent },
      { path: 'changelog', component: ChangelogComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'forums', component: ForumsComponent },
      { path: 'forums-comments', component: ForumsCommentsComponent },
      { path: 'forums-topic', component: ForumsTopicComponent },
      { path: 'helpcenter-faqs', component: HelpcenterFaqsComponent },
      { path: 'helpcenter-guides', component: HelpcenterGuidesComponent },
      { path: 'helpcenter-overview', component: HelpcenterOverviewComponent },
      { path: 'helpcenter-support-request', component: HelpcenterSupportRequestComponent },
      { path: 'index', component: IndexComponent },
      { path: 'index-agency', component: IndexAgencyComponent },
      { path: 'index-apps', component: IndexAppsComponent },
      { path: 'index-blog', component: IndexBlogComponent },
      { path: 'index-business', component: IndexBusinessComponent },
      { path: 'index-car-riding', component: IndexCarRidingComponent },
      { path: 'index-classic-app', component: IndexClassicAppComponent },
      { path: 'index-classic-saas', component: IndexClassicSaasComponent },
      { path: 'index-corporate', component: IndexCorporateComponent },
      { path: 'index-course', component: IndexCourseComponent },
      { path: 'index-coworking', component: IndexCoworkingComponent },
      { path: 'index-crypto', component: IndexCryptoComponent },
      { path: 'index-customer', component: IndexCustomerComponent },
      { path: 'index-digital-agency', component: IndexDigitalAgencyComponent },
      { path: 'index-ebook', component: IndexEbookComponent },
      { path: 'index-email-inbox', component: IndexEmailInboxComponent },
      { path: 'index-enterprise', component: IndexEnterpriseComponent },
      { path: 'index-event', component: IndexEventComponent },
      { path: 'index-hosting', component: IndexHostingComponent },
      { path: 'index-hotel', component: IndexHotelComponent },
      { path: 'index-construction', component: IndexConstructionComponent },
      { path: 'index-real-estate', component: IndexRealEstateComponent },
      { path: 'index-developer', component: IndexDeveloperComponent },
      { path: 'index-seo-agency', component: IndexSeoAgencyComponent },
      { path: 'index-hospital', component: IndexHospitalComponent },
      { path: 'index-finance', component: IndexFinanceComponent },
      { path: 'index-videocall', component: IndexVideocallComponent },
      { path: 'index-it-solution-two', component: IndexItSolutionTwoComponent },
      { path: 'index-freelancer', component: IndexFreelancerComponent },
      { path: 'index-blockchain', component: IndexBlockchainComponent },
      { path: 'index-crypto-two', component: IndexCryptoTwoComponent },
      { path: 'index-integration', component: IndexIntegrationComponent },
      { path: 'index-insurance', component: IndexInsuranceComponent },
      { path: 'index-it-solution', component: IndexItSolutionComponent },
      { path: 'index-job', component: IndexJobComponent },
      { path: 'index-landing-one', component: IndexLandingOneComponent },
      { path: 'index-landing-three', component: IndexLandingThreeComponent },
      { path: 'index-landing-two', component: IndexLandingTwoComponent },
      { path: 'index-landing-four', component: IndexLandingFourComponent },
      { path: 'index-marketing', component: IndexMarketingComponent },
      { path: 'index-modern-business', component: IndexModernBusinessComponent },
      { path: 'index-logistics', component: IndexLogisticsComponent },

      { path: 'index-online-learning', component: IndexOnlineLearningComponent },
      { path: 'index-payments', component: IndexPaymentsComponent },
      { path: 'index-personal', component: IndexPersonalComponent },
      { path: 'index-portfolio', component: IndexPortfolioComponent },
      { path: 'index-saas', component: IndexSaasComponent },
      { path: 'index-services', component: IndexServicesComponent },
      { path: 'index-shop', component: IndexShopComponent },
      { path: 'index-single-product', component: IndexSingleProductComponent },
      { path: 'index-social-marketing', component: IndexSocialMarketingComponent },
      { path: 'index-software', component: IndexSoftwareComponent },
      { path: 'index-studio', component: IndexStudioComponent },
      { path: 'index-task-management', component: IndexTaskManagementComponent },
      { path: 'index-travel', component: IndexTravelComponent },
      { path: 'page-aboutus', component: PageAboutusComponent },
      { path: 'page-aboutus-two', component: PageAboutusTwoComponent },
      { path: 'page-blog-detail', component: PageBlogDetailComponent },
      { path: 'page-blog-grid', component: PageBlogGridComponent },
      { path: 'page-blog-list', component: PageBlogListComponent },
      { path: 'page-blog-list-sidebar', component: PageBlogListSidebarComponent },
      { path: 'page-blog-sidebar', component: PageBlogSidebarComponent },
      { path: 'page-case-detail', component: PageCaseDetailComponent },
      { path: 'page-cases', component: PageCasesComponent },
      { path: 'page-contact-detail', component: PageContactDetailComponent },
      { path: 'page-contact-one', component: PageContactOneComponent },
      { path: 'page-contact-three', component: PageContactThreeComponent },
      { path: 'page-contact-two', component: PageContactTwoComponent },
      { path: 'page-history', component: PageHistoryComponent },
      { path: 'page-invoice', component: PageInvoiceComponent },
      { path: 'page-job-apply', component: PageJobApplyComponent },
      { path: 'page-job-candidate', component: PageJobCandidateComponent },
      { path: 'page-job-company', component: PageJobCompanyComponent },
      { path: 'page-job-detail', component: PageJobDetailComponent },
      { path: 'page-jobs', component: PageJobsComponent },
      { path: 'page-job-company-list', component: PageJobCompanyListComponent },
      { path: 'page-job-candidate-list', component: PageJobCandidateListComponent },
      { path: 'page-jobs-sidebar', component: PageJobsSidebarComponent },
      { path: 'page-pricing', component: PagePricingComponent },
      { path: 'page-privacy', component: PagePrivacyComponent },
      { path: 'page-services', component: PageServicesComponent },
      { path: 'page-team', component: PageTeamComponent },
      { path: 'page-terms', component: PageTermsComponent },
      { path: 'page-work-classic', component: PageWorkClassicComponent },
      { path: 'page-work-detail', component: PageWorkDetailComponent },
      { path: 'page-work-grid', component: PageWorkGridComponent },
      { path: 'page-work-masonry', component: PageWorkMasonryComponent },
      { path: 'page-work-modern', component: PageWorkModernComponent },
      { path: 'shop-cart', component: ShopCartComponent },
      { path: 'shop-checkouts', component: ShopCheckoutsComponent },
      { path: 'shop-myaccount', component: ShopMyaccountComponent },
      { path: 'shop-product-detail', component: ShopProductDetailComponent },
      { path: 'shop-products', component: ShopProductsComponent },
      { path: 'shop-lists', component: ShopListsComponent },
      { path: 'widget', component: WidgetComponent },
      { path: 'page-blog-detail-two', component: PageBlogDetailTwoComponent },
      { path: '#', component: SwitcherComponent },
      { path: 'portfolio-modern-two', component: PortfolioModernTwoComponent },
      { path: 'portfolio-modern-three', component: PortfolioModernThreeComponent },
      { path: 'portfolio-modern-four', component: PortfolioModernFourComponent },
      { path: 'portfolio-modern-five', component: PortfolioModernFiveComponent },
      { path: 'portfolio-modern-six', component: PortfolioModernSixComponent },
      { path: 'portfolio-classic-two', component: PortfolioClassicTwoComponent },
      { path: 'portfolio-classic-three', component: PortfolioClassicThreeComponent },
      { path: 'portfolio-classic-four', component: PortfolioClassicFourComponent },
      { path: 'portfolio-classic-five', component: PortfolioClassicFiveComponent },
      { path: 'portfolio-classic-six', component: PortfolioClassicSixComponent },
      { path: 'portfolio-grid-two', component: PortfolioGridTwoComponent },
      { path: 'portfolio-grid-three', component: PortfolioGridThreeComponent },
      { path: 'portfolio-grid-four', component: PortfolioGridFourComponent },
      { path: 'portfolio-grid-five', component: PortfolioGridFiveComponent },
      { path: 'portfolio-grid-six', component: PortfolioGridSixComponent },
      { path: 'portfolio-masonry-two', component: PortfolioMasonryTwoComponent },
      { path: 'portfolio-masonry-three', component: PortfolioMasonryThreeComponent },
      { path: 'portfolio-masonry-four', component: PortfolioMasonryFourComponent },
      { path: 'portfolio-masonry-five', component: PortfolioMasonryFiveComponent },
      { path: 'portfolio-masonry-six', component: PortfolioMasonrySixComponent },
      { path: 'portfolio-detail-one', component: PortfolioDetailOneComponent },
      { path: 'portfolio-detail-two', component: PortfolioDetailTwoComponent },
      { path: 'portfolio-detail-three', component: PortfolioDetailThreeComponent },
      { path: 'portfolio-detail-four', component: PortfolioDetailFourComponent },
      { path: 'corporate-about', component: CorporateAboutComponent },
      { path: 'corporate-services', component: CorporateServicesComponent },
      { path: 'corporate-team', component: CorporateTeamComponent },
      { path: 'corporate-pricing', component: CorporatePricingComponent },
      { path: 'corporate-blog', component: CorporateBlogComponent },
      { path: 'corporate-blog-detail', component: CorporateBlogDetailComponent },
      { path: 'crypto-about', component: CryptoAboutComponent },
      { path: 'crypto-market', component: CryptoMarketComponent },
      { path: 'crypto-token', component: CryptoTokenComponent },
      { path: 'crypto-services', component: CryptoServicesComponent },
      { path: 'crypto-faqs', component: CryptoFaqsComponent },
      { path: 'crypto-whitepaper', component: CryptoWhitepaperComponent },
      { path: 'crypto-blog', component: CryptoBlogComponent },
      { path: 'crypto-blog-detail', component: CryptoBlogDetailComponent },
      { path: 'shop-aboutus', component: ShopAboutusComponent },
      { path: 'shop-fullwidth-grids', component: ShopFullwidthGridsComponent },
      { path: 'shop-grids', component: ShopGridsComponent },
      { path: 'shop-fullwidth-lists', component: ShopFullwidthListsComponent },
      { path: 'shop-blog', component: ShopBlogComponent },
      { path: 'shop-blog-detail', component: ShopBlogDetailComponent },
      { path: 'portfolio-about', component: PortfolioAboutComponent },
      { path: 'portfolio-service', component: PortfolioServiceComponent },
      { path: 'hosting-domain', component: HostingDomainComponent },
      { path: 'hosting-shared', component: HostingSharedComponent },
      { path: 'hosting-vps', component: HostingVpsComponent },
      { path: 'hosting-dedicated', component: HostingDedicatedComponent },
      { path: 'hosting-cloud', component: HostingCloudComponent },
      { path: 'hosting-reseller', component: HostingResellerComponent },
      { path: 'hosting-aboutus', component: HostingAboutusComponent },
      { path: 'hosting-services', component: HostingServicesComponent },
      { path: 'hosting-faqs', component: HostingFaqsComponent },
      { path: 'hosting-blog', component: HostingBlogComponent },
      { path: 'hosting-blog-detail', component: HostingBlogDetailComponent },
      { path: 'job-list-one', component: JobListOneComponent },
      { path: 'job-list-two', component: JobListTwoComponent },
      { path: 'job-list-three', component: JobListThreeComponent },
      { path: 'job-list-four', component: JobListFourComponent },
      { path: 'job-list-five', component: JobListFiveComponent },
      { path: 'job-detail-one', component:  JobDetailOneComponent},
      { path: 'job-detail-two', component:  JobDetailTwoComponent},
      { path: 'job-detail-three', component:  JobDetailThreeComponent},
      { path: 'job-apply', component:  JobApplyComponent},
      { path: 'job-candidate-list', component:  JobCandidateListComponent},
      { path: 'job-candidate', component:  JobCandidateComponent},
      { path: 'job-company-list', component:  JobCompanyListComponent},
      { path: 'job-company', component:  JobCompanyComponent},
      { path: 'job-about', component:  JobAboutComponent},
      { path: 'job-price', component:  JobPriceComponent},
      { path: 'job-faqs', component:  JobFaqsComponent},
      { path: 'blog-about', component:  BlogAboutComponent},
      { path: 'blog-standard-post', component:  BlogStandardPostComponent},
      { path: 'blog-slider-post', component:  BlogSliderPostComponent},
      { path: 'blog-gallery-post', component:  BlogGalleryPostComponent},
      { path: 'blog-youtube-post', component:  BlogYoutubePostComponent},
      { path: 'blog-vimeo-post', component:  BlogVimeoPostComponent},
      { path: 'blog-audio-post', component:  BlogAudioPostComponent},
      { path: 'blog-blockquote-post', component:  BlogBlockquotePostComponent},
      { path: 'blog-left-sidebar-post', component:  BlogLeftSidebarPostComponent},
      { path: 'index-nft', component:  IndexNftComponent},
      { path: 'nft-explore', component:  NftExploreComponent},
      { path: 'nft-creators', component:  NftCreatorsComponent},
      { path: 'course-detail', component:  CourseDetailComponent},
      { path: 'page-footer', component:  PageFooterComponent},
      { path: 'ui-button', component:  UiButtonComponent},
      { path: 'ui-alert', component:  UiAlertComponent},
      { path: 'ui-typography', component:  UiTypographyComponent},
      { path: 'ui-dropdown', component:  UiDropdownComponent},
      { path: 'ui-background', component:  UiBackgroundComponent},
      { path: 'ui-text', component:  UiTextComponent},
      { path: 'ui-badges', component:  UiBadgesComponent},
      { path: 'ui-accordion', component:  UiAccordionComponent},
      { path: 'ui-card', component:  UiCardComponent},
      { path: 'ui-shadow', component:  UiShadowComponent},
      { path: 'ui-border', component:  UiBorderComponent},
      { path: 'ui-carousel', component:  UiCarouselComponent},
      { path: 'ui-breadcrumb', component:  UiBreadcrumbComponent},
      { path: 'ui-pagination', component:  UiPaginationComponent},
      { path: 'ui-avatar', component:  UiAvatarComponent},
      { path: 'ui-nav-tabs', component:  UiNavTabsComponent},
      { path: 'ui-modals', component:  UiModalsComponent},
      { path: 'ui-tables', component:  UiTablesComponent},
      { path: 'ui-icons', component:  UiIconsComponent},
      { path: 'ui-progressbar', component:  UiProgressbarComponent},
      { path: 'ui-lightbox', component:  UiLightboxComponent},
      { path: 'ui-tooltip-popover', component:  UiTooltipPopoverComponent},
      { path: 'ui-form', component:  UiFormComponent},

      { path: 'inner-page-list', component: InnerPageListComponent },
  { path: 'inner-page-detail', component: InnerPageDetailComponent },
    ]
  },

  { path: 'auth-login', component: AuthLoginComponent },
  { path: 'auth-bs-login', component: AuthBsLoginComponent },
  { path: 'auth-login-bg-video', component: AuthLoginBgVideoComponent },
  { path: 'auth-cover-login', component: AuthCoverLoginComponent },
  { path: 'auth-cover-re-password', component: AuthCoverRePasswordComponent },
  { path: 'auth-cover-signup', component: AuthCoverSignupComponent },
  { path: 'auth-login-three', component: AuthLoginThreeComponent },
  { path: 'auth-re-password', component: AuthRePasswordComponent },
  { path: 'auth-re-password-three', component: AuthRePasswordThreeComponent },
  { path: 'auth-bs-reset', component: AuthBsResetComponent },
  { path: 'auth-reset-password-bg-video', component: AuthResetPasswordBgVideoComponent },
  { path: 'auth-signup', component: AuthSignupComponent },
  { path: 'auth-bs-signup', component: AuthBsSignupComponent },
  { path: 'auth-signup-bg-video', component: AuthSignupBgVideoComponent },
  { path: 'auth-signup-three', component: AuthSignupThreeComponent },
  { path: 'index-onepage', component: IndexOnepageComponent },
  { path: 'page-comingsoon', component: PageComingsoonComponent },
  { path: 'page-comingsoon2', component: PageComingsoon2Component },
  { path: 'page-error', component: PageErrorComponent },
  { path: 'page-thankyou', component: PageThankyouComponent },
  { path: 'page-maintenance', component: PageMaintenanceComponent },

  { path: 'email-alert', component: EmailAlertComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'email-invoice', component: EmailInvoiceComponent },
  { path: 'email-password-reset', component: EmailPasswordResetComponent },




  //

  { path: "home", component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'validate-code', component: ValidateCodeComponent },
  { path: 'myaccount', loadChildren: () => import(`./custom/user/user.module`).then(m => m.UserModule) },
  { path: 'send-code', component: SendCodeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'contact-us', component: ContactUsComponent }
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
