import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  public movies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMoviesDetails().subscribe((data) => {
      this.movies = data;
    });

    console.log(this.movies);
  }
}
