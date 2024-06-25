import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {BookModule} from "./books/book.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingComponent, NotFoundComponent, ContactComponent, ContactUsComponent],
  imports: [HttpClientModule,BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, MatGridListModule, MatToolbarModule,MatInputModule],
  providers: [BookModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
