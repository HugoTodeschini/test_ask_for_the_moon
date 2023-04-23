import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {
  //private url = 'http://jsonplaceholder.typicode.com/posts';
  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=f7b4e11c5d4e61a58dd19582d2d5717d'
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
  
}