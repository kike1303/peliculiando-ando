import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginAuthenticationResponse } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loginAuthentication(
    email: string,
    password: string
  ): Observable<LoginAuthenticationResponse> {
    // MOCKED TOKEN TO SIMULATE BACKEND RESPONSE
    return of({ token: 'QPVMGRNACIFRNACPVMTNADVYHSDFG' });
  }
}
