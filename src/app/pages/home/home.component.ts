import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';
import { TrendingComponent } from '../trending/trending.component';
import { FooterComponent } from '../footer/footer.component';
import { PopularComponent } from '../popular/popular.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent,TrendingComponent,PopularComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
