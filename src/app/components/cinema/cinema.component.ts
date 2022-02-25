import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/models/VisitorMovies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  constructor(private service: MovieService) { }

  Movies(){
    this.service.movieAnnouncement({title: "Star Wars –Rise of Skywalker", length: 210});
  }
  ngOnInit(): void{
    this.service.visitors.subscribe( (visitor: Visitor) => { 
      console.log(visitor);
    });
  }
}
