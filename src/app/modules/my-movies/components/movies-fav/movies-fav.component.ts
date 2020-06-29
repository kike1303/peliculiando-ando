import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MyMoviesState } from 'src/app/store/states/my-movies.state';
import { takeUntil } from 'rxjs/operators';
import { getMyMoviesState } from 'src/app/store/selectors/my-movies.selector';
import { Subject } from 'rxjs';
import { MovieInfo } from 'src/app/models/movie-info.model';
import { CarouselResponseOptions } from 'src/app/models/carousel-response-options.model';

@Component({
  selector: 'app-movies-fav',
  templateUrl: './movies-fav.component.html',
  styleUrls: ['./movies-fav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesFavComponent implements OnInit, OnDestroy {
  destroySubject$ = new Subject<void>();
  myFavMovies: MovieInfo[];
  favMovies: string = 'favMovies';
  noFavMessage: string = 'No posees películas favoritas en estos momentos';
  responsiveOptions: CarouselResponseOptions[];

  constructor(private store: Store<MyMoviesState>) {
    store
      .pipe(select(getMyMoviesState), takeUntil(this.destroySubject$))
      .subscribe((state: MyMoviesState) => {
        this.myFavMovies = state.myFavMovies.length
          ? state.myFavMovies
          : JSON.parse(localStorage.getItem(this.favMovies));

        localStorage.setItem(this.favMovies, JSON.stringify(this.myFavMovies));
      });

    this.responsiveOptions = [
      {
        breakpoint: '992px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '576px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
