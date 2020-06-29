import { Component } from '@angular/core';
import { BannerCarouselInfo } from '../../../../models/banner-carousel-info.model';
import { MOCKER_BANNER_DATA } from './mocked-banner-info';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent {
  bannerCarouselInfo: BannerCarouselInfo[] = MOCKER_BANNER_DATA;
}
