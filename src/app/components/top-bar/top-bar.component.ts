import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { LandingPageState } from '../../store/states/landing-page.state';
import { setLandingPageDisplayLogin } from '../../store/actions/landing-page.actions';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MenuItem } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent implements OnInit {
  showLoginButton: boolean = true;
  userName: string;
  items: MenuItem[];

  constructor(
    private store: Store<LandingPageState>,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.checkMoviePath();

    this.items = [
      {
        label: 'Sign out',
        icon: 'pi pi-sign-out',
        command: () => {
          this.signOut();
        },
      },
    ];
  }

  checkMoviePath() {
    this.showLoginButton = this.router.url !== environment.moviesPath;
    this.userName = sessionStorage.getItem('email')?.split('@')[0];
  }

  signOut() {
    this.toastr.success('SignOut exitoso!');
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  openLoginModal() {
    this.store.dispatch(setLandingPageDisplayLogin({ displayLogin: true }));
  }
}
