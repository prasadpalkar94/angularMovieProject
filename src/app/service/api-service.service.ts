import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Home } from 'src/apiData/home';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }
  getDataForHomeId(id:any): Observable <any> {
    return this.httpClient.get("https://api.themoviedb.org/3/search/movie?api_key=ce8e7de79e18136fdb921ace16d363f9&language=en-US&query=Avengers&page=1&include_adult=false&"+id);
   }

  getDataForHome(): Observable <any> {
    return this.httpClient.get("https://api.themoviedb.org/3/search/movie?api_key=ce8e7de79e18136fdb921ace16d363f9&language=en-US&query=Avengers&page=1&include_adult=false");
   }

   getDataForNowPlaying(): Observable <any> {
    return this.httpClient.get(" https://api.themoviedb.org/3/movie/now_playing?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1");
   }

   getDataForUpcoming(): Observable <any> {
    return this.httpClient.get(" https://api.themoviedb.org/3/movie/upcoming?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US&page=1");
   }

   getDataForLatest(): Observable <any> {
    return this.httpClient.get("https://api.themoviedb.org/3/movie/latest?api_key=5f9bfd5ab4dce1dd61c8ed83e1680d4e&language=en-US");
   }

  getData(): Observable <any> {
   return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  getDataByParameter(): Observable <any> {
    let param1= new HttpParams().set('postId',"1");
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1/comments",{params:param1});
  }

  
}
