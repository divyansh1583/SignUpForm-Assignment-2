import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    MatSlideToggleModule,
    MatRadioModule
  ],  
  providers: [
    provideNgxMask(),
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'black' },
    }
  ]
})
export class AuthModule { }
