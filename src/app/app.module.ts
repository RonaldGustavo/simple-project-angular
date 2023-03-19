import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { ContactComponent } from './component/contact/contact.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ProfileComponent,
    TestimonialComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
