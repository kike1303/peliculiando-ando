import { MovieDetails } from '../../models/movie-details.model';
import { MovieInfo } from '../../models/movie-info.model';

export interface MyMoviesState {
  displayMovieDetails: boolean;
  movieDetails: MovieDetails;
  myFavMovies: MovieInfo[];
}

export const initialMyMoviesState: MyMoviesState = {
  displayMovieDetails: false,
  movieDetails: null,
  myFavMovies: JSON.parse(localStorage.getItem('favMovies')) || [],
};
