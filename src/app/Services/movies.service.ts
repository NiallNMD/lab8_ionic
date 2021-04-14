import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  GetMovieData():Observable<any>
  {
  return  this.httpClient.get('http://www.omdbapi.com/?apikey=8d9d10f&s=%27war%27');


  }
}
