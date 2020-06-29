import { createAction, props } from '@ngrx/store';
import { MovieDetails } from '../../models/movie-details.model';
import { MovieInfo } from '../../models/movie-info.model';

export enum MyMoviesActions {
  SET_DISPLAY_MOVIE_DETAILS = '[My Movies] Set display movie details value',
  SET_MOVIE_DETAILS = '[My Movies] Set movie details',
  SET_MY_FAV_MOVIES = '[My Movies] Set a fav movie',
  DELETE_MY_FAV_MOVIE = '[My Movies] Delete a fav movie',
  GET_MY_MOVIES = '[My Movies] Get my movie state',
}

export const setMyMoviesDisplayMovieDetails = createAction(
  MyMoviesActions.SET_DISPLAY_MOVIE_DETAILS,
  props<{ displayMovieDetails: boolean }>()
);

export const setMyMoviesMovieDetails = createAction(
  MyMoviesActions.SET_MOVIE_DETAILS,
  props<{ movieDetails: MovieDetails }>()
);

export const setMyMoviesFavMovie = createAction(
  MyMoviesActions.SET_MY_FAV_MOVIES,
  props<MovieInfo>()
);

export const deleteMyMoviesFavMovie = createAction(
  MyMoviesActions.DELETE_MY_FAV_MOVIE,
  props<MovieInfo>()
);

export const getMyMovies = createAction(MyMoviesActions.GET_MY_MOVIES);
