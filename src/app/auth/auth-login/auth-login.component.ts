import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})

/**
 * Auth Login Component
 */
export class AuthLoginComponent implements OnInit {
  imageUrl: string = '/assets/images/bg-register.jpeg';
  insertForm: FormGroup;
  Username: FormControl;
  Password: FormControl;
  RememberMe: FormControl;
  returnUrl: string;
  ErrorMessage: string;
  invalidLogin: boolean;
  year = new Date().getFullYear();

  LoginStatus$ = new BehaviorSubject<boolean>(null);

  constructor(
      private acct: AccountService,
      private router: Router,
      private route: ActivatedRoute,
      private fb: FormBuilder,
      public toasterService: ToastrService
  ) {}

  ngOnInit(): void {
      this.acct.globalStateChanged.subscribe((state) => {
          this.LoginStatus$.next(state.loggedInStatus);
      });

      if (this.LoginStatus$.getValue()) {
          this.router.navigate(['/']);
      }

      // Initialize Form Controls
      this.Username = new FormControl('', [Validators.required]);
      this.Password = new FormControl('', [Validators.required]);
      this.RememberMe = new FormControl(false);

      // Initialize FormGroup using FormBuilder
      this.insertForm = this.fb.group({
          Username: this.Username,
          Password: this.Password,
          RememberMe: this.RememberMe
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

     // this.setbackgroundImage();
  }

  onSubmit() {
      let userlogin = this.insertForm.value;
      this.acct
          .login(userlogin.Username, userlogin.Password, userlogin.RememberMe)
          .subscribe(
              (result) => {
                  this.invalidLogin = false;
                  //$('body').css({ 'background-image': 'none' });
                  this.router.navigateByUrl(this.returnUrl);
              },
              (error) => {
                  this.invalidLogin = true;
                  this.ErrorMessage = error;
                  if (error.status == 500) {

                    Swal.fire({
                        title:
                        'Our Team is working to fix this error. Try again later.',
                        icon: 'error',
                        showClass: {
                            popup:
                                'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup:
                                'animate__animated animate__fadeOutUp'
                        }
                    });
                    
                  }
                  if (error.status == 401) {
                    debugger;
                      if (error.error.loginError) {
                          if (
                              error.error.loginError == 'Auth Code Required'
                          ) {
                              localStorage.setItem(
                                  'codeExpiry',
                                  error.error.expiry
                              );
                              localStorage.setItem(
                                  'twoFactorToken',
                                  error.error.twoFactorToken
                              );
                              localStorage.setItem('isSessionActive', '1');
                              localStorage.setItem(
                                  'user_id',
                                  error.error.userId
                              );
                              this.router.navigate(['/send-code']);
                              return false;
                          }
                          if (error.error.loginError == 'Account Locked') {
                              Swal.fire({
                                  title:
                                      'Your account is locked, please contact support.',
                                  icon: 'error',
                                  showClass: {
                                      popup:
                                          'animate__animated animate__fadeInDown'
                                  },
                                  hideClass: {
                                      popup:
                                          'animate__animated animate__fadeOutUp'
                                  }
                              });
                              return false;
                          }
                          if (
                              error.error.loginError == 'Email Not Confirmed'
                          ) {
                              Swal.fire({
                                  title:
                                      'Your Email is not Verified. Please Verify Email',
                                  icon: 'error',
                                  showClass: {
                                      popup:
                                          'animate__animated animate__fadeInDown'
                                  },
                                  hideClass: {
                                      popup:
                                          'animate__animated animate__fadeOutUp'
                                  }
                              });
                              return false;
                          } else {

                            Swal.fire({
                                title: error.error.loginError,
                                icon: 'error',
                                showClass: {
                                    popup:
                                        'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup:
                                        'animate__animated animate__fadeOutUp'
                                }
                            });

                              
                              return false;
                          }
                      } else {


                        Swal.fire({
                            title: 'Invalid Username/Password. Please check credentials and try again',
                            icon: 'error',
                            showClass: {
                                popup:
                                    'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup:
                                    'animate__animated animate__fadeOutUp'
                            }
                        });
                        
                          return false;
                      }
                  } else {

                    Swal.fire({
                        title: 'An error occured while processing this request.',
                        icon: 'error',
                        showClass: {
                            popup:
                                'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup:
                                'animate__animated animate__fadeOutUp'
                        }
                    });
                     
                      return false;
                  }
              }
          );
  }

  // setbackgroundImage() {
  //     $('body').css({
  //         'background-image': 'url(' + this.imageUrl + ')',
  //         'background-repeat': 'no-repeat',
  //         'background-size': 'cover'
  //     });
  // }
}

//   year = new Date().getFullYear()
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
