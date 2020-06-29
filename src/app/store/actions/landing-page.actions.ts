import { createAction, props } from '@ngrx/store';
import { LandingPageState } from '../states/landing-page.state';

export enum LandingPageActions {
  GET_DISPLAY_LOGIN = '[Landing Page] Get display login value',
  SET_DISPLAY_LOGIN = '[Landing Page] Set display login value',
}

export const getLandingPageDisplayLogin = createAction(
  LandingPageActions.GET_DISPLAY_LOGIN
);

export const setLandingPageDisplayLogin = createAction(
  LandingPageActions.SET_DISPLAY_LOGIN,
  props<LandingPageState>()
);
