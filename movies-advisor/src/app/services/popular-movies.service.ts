import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {
  language!: string
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(language = 'en'){
    return this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=f7b4e11c5d4e61a58dd19582d2d5717d&language=' + language +'&page=1');
  }
  
}