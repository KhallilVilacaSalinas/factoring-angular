import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {NgxMaskModule} from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule , ReactiveFormsModule , NgxMaskModule.forRoot({
    showMaskTyped : true,
    // clearIfNotMatch : true
  }) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
