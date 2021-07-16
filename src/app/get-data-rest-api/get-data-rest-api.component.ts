import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { Movie } from '../../apiData/movie';

@Component({
  selector: 'app-get-data-rest-api',
  templateUrl: './get-data-rest-api.component.html',
  styleUrls: ['./get-data-rest-api.component.css']
})
export class GetDataRestApiComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  listData?: Movie[];

  ngOnInit(): void {
    this.apiService.getData().subscribe(data=>{this.listData=data;});
  }

}
