import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MyMoviesState } from '../../../../store/states/my-movies.state';
import { getMyMoviesState } from '../../../../store/selectors/my-movies.selector';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieDetails } from '../../../../models/movie-details.model';
import { setMyMoviesDisplayMovieDetails } from 'src/app/store/actions/my-movies.actions';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieDetailsComponent implements OnDestroy {
  displayModal: boolean = false;
  movieDetails: MovieDetails;
  movieDetailsList: string[] = [
    'Title',
    'Year',
    'Released',
    'Runtime',
    'Genre',
    'Director',
    'Writer',
    'Actors',
    'Plot',
    'Country',
    'Awards',
    'Metascore',
    'imdbRating',
    'imdbVotes',
    'Production',
  ];
  destroySubject$ = new Subject<void>();

  constructor(private store: Store<MyMoviesState>) {
    store
      .pipe(select(getMyMoviesState), takeUntil(this.destroySubject$))
      .subscribe((state: MyMoviesState) => {
        this.displayModal = state.displayMovieDetails;
        this.movieDetails = state.movieDetails;
      });
  }

  closeMovieDetailsModal() {
    this.store.dispatch(
      setMyMoviesDisplayMovieDetails({ displayMovieDetails: false })
    );
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
