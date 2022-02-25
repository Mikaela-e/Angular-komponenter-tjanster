import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Moviecinema';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

  constructor(private service: MovieService) { }

  ngOnInit(): void {
      this.service.publishedMovie.subscribe( (published: Movie) => { 
        console.log(published);
      });
  }

  Visitors(){
    this.service.Visitors({name: "Mikaela",age: 32});
  }

}
