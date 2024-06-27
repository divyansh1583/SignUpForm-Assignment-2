import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import{countries} from '../../data/countries';
import{states} from '../../data/states';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-material',
  templateUrl: './signup-material.component.html',
  styleUrls: ['./signup-material.component.scss']
})
export class SignupMaterialComponent {
  states: { [key: string]: { id: string; name: string; }[] } = states;
  countries=countries;
  hide = true;
  hide1 = true;
  private fb = inject(FormBuilder);
  signupFormMat = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phoneNumber: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    country: [null, Validators.required],
    state: [null, Validators.required],
    gender: [null, Validators.required],
    password: [null, [Validators.required, Validators.minLength(6)]],
    confirmPassword: [null, [Validators.required, Validators.minLength(6)]]
  },
    {
      validators: this.passwordMatchValidator
    }
  );
  //func to get form values
  getControl(formControl: string) {
    return this.signupFormMat.get(formControl);
  }

  //passwordmatcher validator
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  //func to get states list by country key
  getStates(){
    const country = this.signupFormMat.get('country')?.value;
    if (country) {
      return this.states[country];
    }
    return [];
  }
  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
