import { appFeatureKey } from '../reducers/app.reducer';
import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';

export const getFeatureState = createFeatureSelector<AppState>(appFeatureKey);
