import { Component, OnInit } from '@angular/core';
import { MemberDetails } from 'src/core/interfaces';
import { IitcService } from 'src/services/iitc.service';
import { MovieService } from 'src/services/movie.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  public movies: any = [];
  movie: any;
  movieArray: any = [];
  loading: boolean = true;
  memberData: MemberDetails = {
    mobile: '',
    name: '',
    type: '',
  };
  selectMovies: any;
  finalObj: any = {};
  isDisable: any = true;
  TestVariable = {};

  constructor(
    private movieService: MovieService,
    private iitcService: IitcService
  ) {}

  ngOnInit() {
    this.movieService.getMoviesDetails().subscribe((data) => {
      this.movies = data;
      this.loading = false;

      this.movies.data.forEach((movie: any) => {
        this.movie = movie;
      });
    });
  }

  onRowSelect(event: any) {
    this.finalObj = { selected: this.selectMovies };
    this.isDisable = false;
  }
}
