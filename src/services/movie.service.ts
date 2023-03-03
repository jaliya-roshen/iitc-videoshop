import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url: string = '/assets/data/movies.json';

  constructor(private http: HttpClient) {}

  getMoviesDetails() {
    return this.http.get(this.url);
  }
}
