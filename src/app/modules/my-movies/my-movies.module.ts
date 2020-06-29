import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMoviesComponent } from './my-movies.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as appReducer from '../../store/reducers/app.reducer';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { MoviesComponent } from './components/movies/movies.component';
import { CardModule } from 'primeng/card';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DialogModule } from 'primeng/dialog';
import { MoviesFavComponent } from './components/movies-fav/movies-fav.component';
import { CarouselModule } from 'primeng/carousel';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyMoviesComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MoviesFavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CardModule,
    FormsModule,
    StoreModule.forFeature(appReducer.appFeatureKey, appReducer.reducers),
    DialogModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
})
export class MyMoviesModule {}
