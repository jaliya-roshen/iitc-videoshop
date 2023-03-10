import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginGuard } from './guards/login.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { RentMovieComponent } from './rent-movie/rent-movie.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'member', component: NewMemberComponent },
  {
    path: 'movie',
    canActivate: [LoginGuard],
    component: MovieSearchComponent,
  },
  { path: 'rent', canActivate: [LoginGuard], component: RentMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
