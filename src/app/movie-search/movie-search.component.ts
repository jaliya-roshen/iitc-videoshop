import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemberDetails, Movie } from 'src/core/interfaces';
import { IitcService } from 'src/services/iitc.service';
import { MovieService } from 'src/services/movie.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  public movies: any = [];
  movie: any;
  loading: boolean = true;
  memberData: MemberDetails;
  selectMovies: Movie;
  finalObj: Movie;
  isDisable: any = true;
  enableContent: boolean = false;
  messageSubscription: Subscription;

  constructor(
    private movieService: MovieService,
    private iitcService: IitcService
  ) {}

  ngOnInit(): void {
    this.movieService.getMoviesDetails().subscribe((data) => {
      this.movies = data;
      this.loading = false;

      this.movies.data.forEach((movie: any) => {
        this.movie = movie;
      });
    });

    this.messageSubscription = this.iitcService
      .receiveMessage()
      .subscribe((data) => {
        console.log('debug subject', data);
        this.enableContent = !data;
      });
  }

  onRowSelect(event: any): void {
    this.finalObj = this.selectMovies;
    this.isDisable = false;
    console.log('selected Movies from Movie search Component', this.finalObj);
    this.iitcService.triggerMemberData(this.finalObj);
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
}
