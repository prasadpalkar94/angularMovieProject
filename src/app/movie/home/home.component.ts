import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Home } from '../../../apiData/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  listofHome?:Home[];

  ngOnInit(): void {
    this.apiService.getDataForHome().subscribe(data =>{this.listofHome = data;});
  }

}
