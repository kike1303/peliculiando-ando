import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieInfoResponse } from '../models/movie-info.model';
import { MovieDetails } from '../models/movie-details.model';

@Injectable({
  providedIn: 'root',
})
export class OmdbApiService {
  ombdUrl = environment.ombdUrl;
  apiKey = environment.ombdApikey;
  movieType = 'movie';

  constructor(private http: HttpClient) {}

  searchMovieInfo(search: string, page: number): Observable<MovieInfoResponse> {
    const params = new HttpParams({
      fromObject: Object.assign({
        apiKey: this.apiKey,
        type: this.movieType,
        s: search,
        page,
      }),
    });
    return this.http.get<MovieInfoResponse>(this.ombdUrl, { params });
  }

  searchMovieByTitle(title: string): Observable<MovieDetails> {
    const params = new HttpParams({
      fromObject: Object.assign({
        apiKey: this.apiKey,
        t: title,
      }),
    });
    return this.http.get<MovieDetails>(this.ombdUrl, { params });
  }
}
