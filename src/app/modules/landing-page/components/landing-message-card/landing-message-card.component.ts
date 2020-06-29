import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LandingPageState } from 'src/app/store/states/landing-page.state';
import { setLandingPageDisplayLogin } from 'src/app/store/actions/landing-page.actions';

@Component({
  selector: 'app-landing-message-card',
  templateUrl: './landing-message-card.component.html',
  styleUrls: ['./landing-message-card.component.scss'],
})
export class LandingMessageCardComponent {
  constructor(private store: Store<LandingPageState>) {}

  openLoginModal() {
    this.store.dispatch(setLandingPageDisplayLogin({ displayLogin: true }));
  }
}
