import { createSelector } from '@ngrx/store';
import { getFeatureState } from './app.selector';
import { AppState } from '../states/app.state';

export const getDisplayLoginState = createSelector(
  getFeatureState,
  (state: AppState) => state.landingPage
);
