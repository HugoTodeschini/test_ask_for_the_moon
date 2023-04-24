import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {
  private url_en = 'https://api.themoviedb.org/3/movie/popular?api_key=f7b4e11c5d4e61a58dd19582d2d5717d&language=en&page=1'
  private url_fr = 'https://api.themoviedb.org/3/movie/popular?api_key=f7b4e11c5d4e61a58dd19582d2d5717d&language=fr&page=1'
  private url_co = 'https://api.themoviedb.org/3/movie/popular?api_key=f7b4e11c5d4e61a58dd19582d2d5717d&language=co&page=1'
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url_fr);
  }
  
}