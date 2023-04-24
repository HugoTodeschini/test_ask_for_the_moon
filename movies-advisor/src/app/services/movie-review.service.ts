import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {
  movie_id!: number
  review_url!: any
  constructor(private httpClient: HttpClient) { }

  getPosts(movie_id = 502355){
    this.review_url = 'https://api.themoviedb.org/3/movie/' + movie_id + '/reviews?api_key=f7b4e11c5d4e61a58dd19582d2d5717d&language=en-US&page=1';
    return this.httpClient.get(this.review_url);
  }
}