import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  user?: { id: string; };
  
  constructor(private route:ActivatedRoute, private apiService:ApiServiceService) { }
  
  movieDetails:any = [];

  ngOnInit(): void {
    // this.user = {
    //   id: this.route.snapshot.params['id']
    // };
    // this.route.params.subscribe((data:Params)=>{
    //   this.user={
    //     id: data['id']
    //   }
    // })
    this.getMovieDetails();
  }

  getMovieDetails():void{
      this.apiService.getDataForHome().subscribe(data => {this.movieDetails = data.results;});
      console.log(this.movieDetails);
  }


}
