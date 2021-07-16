import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable <any> {
   return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  getDataByParameter(): Observable <any> {
    let param1= new HttpParams().set('postId',"1");
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments",{params:param1});
  }
}
