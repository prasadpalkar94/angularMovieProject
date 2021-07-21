import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Home } from '../../../apiData/home';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiServiceService, private router:Router) { }
  
 
   items:any = [];
  

   onSelect(){
      this.router.navigateByUrl('movieDetail');
   }

  ngOnInit(): void {
    this.apiService.getDataForHome().subscribe(data =>{this.items = data.results;
      console.log(this.items);
    });
  }

  

}
