import {
  Component,
  ViewEncapsulation,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MovieInfo } from '../../../../models/movie-info.model';
import { Store, select } from '@ngrx/store';
import { MyMoviesState } from '../../../../store/states/my-movies.state';
import {
  setMyMoviesDisplayMovieDetails,
  setMyMoviesMovieDetails,
  setMyMoviesFavMovie,
  deleteMyMoviesFavMovie,
} from '../../../../store/actions/my-movies.actions';
import { OmdbApiService } from '../../../../services/omdb-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieDetails } from '../../../../models/movie-details.model';
import { getMyMoviesState } from '../../../../store/selectors/my-movies.selector';
import { environment } from '../../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieCardComponent implements OnInit, OnDestroy {
  @Input() movieInfo: MovieInfo;
  destroySubject$ = new Subject<void>();
  posterToShow: string;
  isMovieFav: boolean;

  constructor(
    private store: Store<MyMoviesState>,
    private ombdApiService: OmdbApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.store
      .pipe(select(getMyMoviesState), takeUntil(this.destroySubject$))
      .subscribe((state: MyMoviesState) => {
        this.isMovieFav = Boolean(
          state.myFavMovies.find(
            (movie: MovieInfo) => movie.imdbID === this.movieInfo.imdbID
          )
        );
      });

    this.posterToShow = this.movieInfo.Poster.includes('https://')
      ? this.movieInfo.Poster
      : environment.noImageAvailablePath;
  }

  showDetails() {
    this.store.dispatch(
      setMyMoviesDisplayMovieDetails({ displayMovieDetails: true })
    );

    this.searchMovieByTitle();
  }

  searchMovieByTitle() {
    this.ombdApiService
      .searchMovieByTitle(this.movieInfo.Title)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((response: MovieDetails) => {
        this.store.dispatch(
          setMyMoviesMovieDetails({ movieDetails: response })
        );
      });
  }

  checkMovieFav() {
    this.isMovieFav = !this.isMovieFav;
    if (this.isMovieFav) {
      this.toastr.success('Película agregada a favoritas');
      this.store.dispatch(setMyMoviesFavMovie(this.movieInfo));
    } else {
      this.store.dispatch(deleteMyMoviesFavMovie(this.movieInfo));
    }
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
