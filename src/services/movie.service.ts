import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url: string = '/assets/data/movies.json';

  constructor(private http: HttpClient) {}

  getMoviesDetails(): Observable<Movie> {
    return this.http.get<Movie>(this.url);
  }
}
