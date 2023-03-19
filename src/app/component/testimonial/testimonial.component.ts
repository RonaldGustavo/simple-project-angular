import { Component } from '@angular/core';
import { Testimonial } from 'src/app/shared/testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  testimonial: Testimonial[] = [
    new Testimonial("../../../assets/testimonial-1.png", "Ronald", "Front end Developer", "ahli dalam framework React, Next.js, dan Angular", "17 Maret 2023"),
    new Testimonial("../../../assets/testimonial-2.png", "Gustavo", "Back End Developer", "ahli dalam bahasa pemograman Java", "18 Maret 2023"),
    new Testimonial("../../../assets/testimonial-3.png", "Nald", "System Analyst", "ahli dalam system analyst", "19 Maret 2023")
  ]
}
