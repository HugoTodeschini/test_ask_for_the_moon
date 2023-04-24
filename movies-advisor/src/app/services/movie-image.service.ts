import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieImageService {
  movie_id!: number
  image_url!: any
  constructor(private httpClient: HttpClient) { }

  getPosts(movie_id = 502355){
    this.image_url = 'https://api.themoviedb.org/3/movie/' + movie_id + '/images?api_key=f7b4e11c5d4e61a58dd19582d2d5717d';
    return this.httpClient.get(this.image_url);
  }
}