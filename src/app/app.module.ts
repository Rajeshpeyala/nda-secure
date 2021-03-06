import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormField, MatIcon } from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout'


import { HttpClientModule } from '@angular/common/http';
import { NDAUrls } from './_urls/NDAUrls';

import { ReactiveFormsModule} from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';




@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,  
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    
  ],
  providers: [NDAUrls],
  bootstrap: [AppComponent]
})
export class AppModule { }
