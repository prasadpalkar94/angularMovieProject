import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './service/api-service.service';
import { MaterialModule } from './material/material/material.module';
import { FormsModule } from '@angular/forms';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NowplayingComponent } from './movie/nowplaying/nowplaying.component';
import { UpcomingComponent } from './movie/upcoming/upcoming.component';
import { HomeComponent } from './movie/home/home.component';
import { LatestComponent } from './movie/latest/latest.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetDataRestApiComponent } from './get-data-rest-api/get-data-rest-api.component';
import { GetDataByParameterRestApiComponent } from './get-data-by-parameter-rest-api/get-data-by-parameter-rest-api.component';
import { NavBarComponent } from './movie/nav-bar/nav-bar.component';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NowplayingComponent,
    UpcomingComponent,
    HomeComponent,
    LatestComponent,
    MovieDetailComponent,
    GetDataRestApiComponent,
    GetDataByParameterRestApiComponent,
    NavBarComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    //  Ng2SearchPipeModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
