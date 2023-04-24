import { Component, OnInit, Input } from '@angular/core';
import { MovieReviewService } from '../services/movie-review.service';
import { MovieImageService } from '../services/movie-image.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: any;
  images!: any
  reviews!: any
  url_image!: string
  

  constructor(private reviewService:MovieReviewService, private movieService:MovieImageService) {}
  
  ngOnInit() {
      this.reviewService.getPosts(this.movie.id)
        .subscribe(response => {
          this.reviews = response;
        });

      this.movieService.getPosts(this.movie.id)
        .subscribe(response => {
          this.images = response;
          this.url_image = "https://image.tmdb.org/t/p/original" + this.images.backdrops[0].file_path
        });
  }
}