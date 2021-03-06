import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Home } from '../../../apiData/home';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  listofLatest:any=[];
  res:boolean=false;

  ngOnInit(): void {
    
    this.apiService.getDataForLatest().subscribe(data =>{this.listofLatest = data.results;});
    console.log(this.listofLatest);
    this.res=true;
  }
}
