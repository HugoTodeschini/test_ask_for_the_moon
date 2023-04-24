import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: string; // decorate the property with @Input()
  //description!: string;
  //https://api.themoviedb.org/3/movie/popular?api_key=f7b4e11c5d4e61a58dd19582d2d5717d

  ngOnInit() {
    //this.description = 'Mon meilleur ami depuis tout petit !';
  }
}