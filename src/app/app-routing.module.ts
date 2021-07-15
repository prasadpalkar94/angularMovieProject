import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowplayingComponent } from './movie/nowplaying/nowplaying.component';
import { UpcomingComponent } from './movie/upcoming/upcoming.component';
import { HomeComponent } from './movie/home/home.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'current', component:NowplayingComponent},
{path:'upcoming', component:UpcomingComponent},
{path:'movieDetail',component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
    export class AppRoutingModule { }
