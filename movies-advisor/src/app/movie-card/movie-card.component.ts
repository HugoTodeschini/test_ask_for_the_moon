import { Component, OnInit, Input } from '@angular/core';
import { MovieReviewService } from '../services/movie-review.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: any; // decorate the property with @Input()
  //description!: string;
  reviews!: any;

  constructor(private service:MovieReviewService) {}
  
  ngOnInit() {
      this.service.getPosts(this.movie.id)
        .subscribe(response => {
          this.reviews = response;
        });
  }
}