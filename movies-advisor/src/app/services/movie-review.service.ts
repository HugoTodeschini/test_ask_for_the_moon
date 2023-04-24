import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {
  private url_movie_review = 'https://api.themoviedb.org/3/movie/502356/reviews?api_key=f7b4e11c5d4e61a58dd19582d2d5717d&language=en-US&page=1'

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url_movie_review);
  }

}
