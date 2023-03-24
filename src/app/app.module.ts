import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// component
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { ContactComponent } from './component/contact/contact.component';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { EmailComponent } from './views/email/email.component';
import { CheckemailComponent } from './views/checkemail/checkemail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ProfileComponent,
    TestimonialComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EmailComponent,
    CheckemailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
