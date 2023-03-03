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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { IitcService } from 'src/services/iitc.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from 'src/services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewMemberComponent,
    MainPageComponent,
    MovieSearchComponent,
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
    HttpClientModule,
  ],
  providers: [ConfirmationService, MessageService, IitcService, MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
