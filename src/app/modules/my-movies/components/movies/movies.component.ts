import { Component, OnDestroy } from '@angular/core';
import { OmdbApiService } from 'src/app/services/omdb-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieInfoResponse, MovieInfo } from 'src/app/models/movie-info.model';

const noFoundMovieMessage = 'No se encuentran coincidencias con su búsqueda :(';
const findYourMovieMessage = 'Aquí puedes buscar la película que desees';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnDestroy {
  searchMovie: string;
  movieListPage: number = 1;
  totalPage: number;
  movieList: MovieInfo[];
  destroySubject$ = new Subject<void>();
  message: string = findYourMovieMessage;

  constructor(private ombdApiService: OmdbApiService) {}

  searchingMovie() {
    this.movieListPage = 1;
    this.searchMovieInfo();
  }

  changePage(direction: number) {
    this.movieListPage += direction;
    this.searchMovieInfo();
  }

  searchMovieInfo() {
    this.ombdApiService
      .searchMovieInfo(this.searchMovie, this.movieListPage)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((response: MovieInfoResponse) => {
        this.movieList = response.Search;
        this.totalPage = Math.ceil(Number(response.totalResults) / 10);

        this.message =
          this.searchMovie && !JSON.parse(response.Response.toLowerCase())
            ? noFoundMovieMessage
            : findYourMovieMessage;
      });
  }

  arrowLeftDisable(): boolean {
    return Boolean(this.movieListPage < 2 || !this.searchMovie);
  }

  arrowRightDisable(): boolean {
    return Boolean(this.movieListPage >= this.totalPage || !this.searchMovie);
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
