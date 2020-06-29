import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return next.handle(request);
    }

    /* 
    
      * Add Authorization Bearer in header *
      * This code it's intercepting any http petitiom in project *
      * It is comment because OMBD API doesn't accept this in its headers *
      * Intead it's only returning the same request *
      * This Interceptor only simulate a real interceptor in a real project *

      const headers = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(headers);

    */
    return next.handle(request);
  }
}
