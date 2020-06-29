import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { DialogModule } from 'primeng/dialog';
import { LoginComponent } from '../../components/login/login.component';
import * as appReducer from '../../store/reducers/app.reducer';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LandingMessageComponent } from './components/landing-message/landing-message.component';
import { LandingMessageCardComponent } from './components/landing-message-card/landing-message-card.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    BannerCarouselComponent,
    LoginComponent,
    LandingMessageComponent,
    LandingMessageCardComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(appReducer.appFeatureKey, appReducer.reducers),
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LandingPageModule {}
