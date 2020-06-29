import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/app.state';
import * as landingPageReducer from './landing-page.reducer';
import * as myMoviesReducer from './my-movies.reducer';

export const appFeatureKey = 'appFeatureKey';

export const reducers: ActionReducerMap<AppState> = {
  landingPage: landingPageReducer.reducer,
  myMovies: myMoviesReducer.reducer,
};
