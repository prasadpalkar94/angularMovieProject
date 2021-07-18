import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Home } from '../../../apiData/home';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  
  listofUpcoming:any = [];

  ngOnInit(): void {
    this.apiService.getDataForUpcoming().subscribe(data =>{this.listofUpcoming = data.results;});
    console.log(this.listofUpcoming);
    
  }

}
