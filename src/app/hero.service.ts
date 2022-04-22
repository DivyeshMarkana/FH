import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

URL = 'https://macheroes-decb3-default-rtdb.firebaseio.com/heroes.json'

  constructor( private http: HttpClient  ) { }

  saveHeroes(heroes: Hero[]){
    return this.http.put<Hero>(this.URL, heroes)
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.URL)
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.URL}/${id}`;
    console.log(url);
    
    return this.http.get<Hero>(url)

  }

}
