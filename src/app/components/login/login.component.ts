import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginAuthenticationResponse } from 'src/app/models/auth.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { LandingPageState } from '../../store/states/landing-page.state';
import { getDisplayLoginState } from '../../store/selectors/landing-page.selector';
import { setLandingPageDisplayLogin } from 'src/app/store/actions/landing-page.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, OnDestroy {
  displayModal: boolean = false;
  loginForm: FormGroup;
  destroySubject$ = new Subject<void>();

  constructor(
    private store: Store<LandingPageState>,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    store
      .pipe(select(getDisplayLoginState), takeUntil(this.destroySubject$))
      .subscribe((state: LandingPageState) => {
        this.displayModal = state.displayLogin;
      });
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  loginAccount() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('email').value;
    this.authService
      .loginAuthentication(email, password)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((response: LoginAuthenticationResponse) => {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('token', response.token);
        this.router.navigate([environment.moviesPath]);
      });
    this.closeLoginModal();
  }

  closeLoginModal() {
    this.store.dispatch(setLandingPageDisplayLogin({ displayLogin: false }));
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
