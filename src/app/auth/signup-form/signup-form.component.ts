import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  countries = ['USA', 'Canada', 'UK', 'Australia', 'India'];
  states: { [key: string]: string[] } = {
    USA: ['California', 'Florida', 'New York', 'Texas'],
    Canada: ['Alberta', 'British Columbia', 'Ontario', 'Quebec'],
    UK: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    Australia: ['New South Wales', 'Queensland', 'Victoria', 'Western Australia'],
    India: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu']
  };

  constructor(private fb: FormBuilder) { }

  signupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    country: ['', Validators.required],
    state: ['', Validators.required],
    gender: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  }, {
    validators: this.passwordMatchValidator
  });


  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  
  getStates() {
    const country = this.signupForm.get('country')?.value;
    if (country) {
      return this.states[country];
    }
    return [];
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
