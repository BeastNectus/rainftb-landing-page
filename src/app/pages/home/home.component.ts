import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { TrendingComponent } from '../trending/trending.component';
import { FooterComponent } from '../footer/footer.component';
import { PopularComponent } from '../popular/popular.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent,TrendingComponent,PopularComponent,TestimonialComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
