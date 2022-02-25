import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/Moviecinema';
import { Visitor } from '../models/VisitorMovies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieSource = new Subject<Movie>();
  publishedMovie = this.movieSource.asObservable();

  
  constructor() { }

  movieAnnouncement(movie: Movie){
    this.movieSource.next(movie)
    }
  Visitors(visitor: Visitor){
    this.visitorSource.next(visitor)
  }

    private visitorSource = new Subject<Visitor>();
    visitors = this.visitorSource.asObservable();

}

