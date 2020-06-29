import { createSelector } from '@ngrx/store';
import { getFeatureState } from './app.selector';
import { AppState } from '../states/app.state';

export const getMyMoviesState = createSelector(
  getFeatureState,
  (state: AppState) => state.myMovies
);
