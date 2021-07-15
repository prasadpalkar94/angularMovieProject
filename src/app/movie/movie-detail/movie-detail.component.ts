import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Movie } from '../../../apiData/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  
  constructor(private apiService:ApiServiceService) { }
  listData?: Movie[];

  ngOnInit(): void {
    this.apiService.getData().subscribe(data=>{this.listData=data;});
  }



}
