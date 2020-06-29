import {
  initialLandingPageState,
  LandingPageState,
} from './landing-page.state';
import { MyMoviesState, initialMyMoviesState } from './my-movies.state';

export interface AppState {
  landingPage: LandingPageState;
  myMovies: MyMoviesState;
}

export const initialAppState: AppState = {
  landingPage: initialLandingPageState,
  myMovies: initialMyMoviesState,
};
