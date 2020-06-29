export interface MovieInfo {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export interface MovieInfoResponse {
  Search: MovieInfo[];
  totalResults: string;
  Response: string;
}
