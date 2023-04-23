import { Component, OnInit} from '@angular/core';
import { PopularMoviesService } from './services/popular-movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'movies-advisor';
  popularMovies:any;
  
  constructor(private service:PopularMoviesService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.popularMovies = response;
        });
  }
}