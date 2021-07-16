import { Component, OnInit } from '@angular/core';
import { Data } from 'src/apiData/data';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-get-data-by-parameter-rest-api',
  templateUrl: './get-data-by-parameter-rest-api.component.html',
  styleUrls: ['./get-data-by-parameter-rest-api.component.css']
})
export class GetDataByParameterRestApiComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }
  listDataByParamter?: Data[];

 
  ngOnInit(): void {
    this.apiService.getDataByParameter().subscribe(data =>{this.listDataByParamter = data;});
  }

}
