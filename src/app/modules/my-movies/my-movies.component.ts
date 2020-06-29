import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
})
export class MyMoviesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.checkToken();
  }

  checkToken() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.router.navigate(['']);
    }
  }
}
