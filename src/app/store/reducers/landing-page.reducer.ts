import { createReducer, on, Action } from '@ngrx/store';
import {
  initialLandingPageState,
  LandingPageState,
} from '../states/landing-page.state';
import * as LandingPageActions from '../actions/landing-page.actions';

export const getDisplayLogin = (state: LandingPageState) => ({
  ...state,
});

export const setDisplayLogin = (
  state: LandingPageState,
  newState: LandingPageState
) => ({
  ...state,
  ...newState,
});

export const landingPageReducer = createReducer(
  initialLandingPageState,
  on(LandingPageActions.getLandingPageDisplayLogin, getDisplayLogin),
  on(LandingPageActions.setLandingPageDisplayLogin, setDisplayLogin)
);

export function reducer(
  state: LandingPageState | undefined,
  action: Action
): LandingPageState {
  return landingPageReducer(state, action);
}
