import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { IitcService } from 'src/services/iitc.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from 'src/services/movie.service';
import { RentMovieComponent } from './rent-movie/rent-movie.component';
import { RentService } from 'src/services/rent.service';
import { StorageService } from 'src/services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewMemberComponent,
    MainPageComponent,
    MovieSearchComponent,
    RentMovieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    PanelModule,
    TabMenuModule,
    TabViewModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    TableModule,
    DropdownModule,
    HttpClientModule,
    SplitButtonModule,
    RippleModule,
    CalendarModule,
  ],
  providers: [
    ConfirmationService,
    MessageService,
    IitcService,
    MovieService,
    RentService,
    StorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
