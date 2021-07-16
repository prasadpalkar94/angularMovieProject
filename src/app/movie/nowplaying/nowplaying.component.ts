import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Home } from '../../../apiData/home';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  listofNowPlaying?:Home[];

  ngOnInit(): void {
    this.apiService.getDataForNowPlaying().subscribe(data =>{this.listofNowPlaying = data;});
  }

}
