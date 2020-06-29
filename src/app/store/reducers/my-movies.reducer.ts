import * as myMoviesActions from '../actions/my-movies.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { initialMyMoviesState, MyMoviesState } from '../states/my-movies.state';
import { MovieDetails } from '../../models/movie-details.model';
import { MovieInfo } from 'src/app/models/movie-info.model';

export const getMyMovies = (state: MyMoviesState) => ({
  ...state,
});

export const setDisplayMovieDetails = (
  state: MyMoviesState,
  displayMovieDetails: { displayMovieDetails: boolean }
) => ({
  ...state,
  ...displayMovieDetails,
});

export const setMyMoviesMovieDetails = (
  state: MyMoviesState,
  movieDetails: { movieDetails: MovieDetails }
) => ({
  ...state,
  ...movieDetails,
});

export const setMyMoviesFavMovie = (
  state: MyMoviesState,
  movie: MovieInfo
) => ({
  ...state,
  myFavMovies: [...state.myFavMovies, movie],
});

export const deleteMyMoviesFavMovie = (
  state: MyMoviesState,
  movie: MovieInfo
) => {
  const myFavMovies = state.myFavMovies.filter(
    (myMovie: MovieInfo) => myMovie.imdbID !== movie.imdbID
  );
  localStorage.setItem('favMovies', JSON.stringify(myFavMovies));
  return {
    ...state,
    myFavMovies,
  };
};

export const myMoviesReducer = createReducer(
  initialMyMoviesState,
  on(myMoviesActions.getMyMovies, getMyMovies),
  on(myMoviesActions.setMyMoviesDisplayMovieDetails, setDisplayMovieDetails),
  on(myMoviesActions.setMyMoviesMovieDetails, setMyMoviesMovieDetails),
  on(myMoviesActions.setMyMoviesFavMovie, setMyMoviesFavMovie),
  on(myMoviesActions.deleteMyMoviesFavMovie, deleteMyMoviesFavMovie)
);

export function reducer(
  state: MyMoviesState | undefined,
  action: Action
): MyMoviesState {
  return myMoviesReducer(state, action);
}
