import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  
  constructor(private route:ActivatedRoute, private apiService:ApiServiceService) { }
  id: any;
  movieDetails:any = [];

  ngOnInit(): void {
   
    
    this.id=this.route.snapshot.params['id'];
    this.getMovieDetails();
  }

  getMovieDetails():void{
      this.apiService.getDataForHomeId(this.id).subscribe(data => {this.movieDetails = data.results;});
      console.log(this.movieDetails);
  }


}
