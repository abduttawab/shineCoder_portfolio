import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

/***
 * Footer Component
 */
export class FooterComponent implements OnInit {

  @Input() footerVariant: string;
  @Input() hideFooter: boolean;

  newsForm!: UntypedFormGroup;
  submitted = false;

  //Get Year
  year = new Date().getFullYear()

  footerText = `
  Start working with ShineCoder that can provide everything you need to
  generate
  awareness, drive traffic, connect.`;
  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.newsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get form() { return this.newsForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.newsForm.invalid) {
      return;
    }
  }

}
