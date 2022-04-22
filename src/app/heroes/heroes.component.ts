import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

fetching = false;

  heroList:Hero[] = [
    { id: 1, heroName: "Dr. stranger", power: 'Time manipulation' },
    { id: 2, heroName: "John wick", power: 'Killer buster' },
    { id: 3, heroName: "Itachi Uchiha", power: 'Infinite tsukuyomi' },
    { id: 4, heroName: "Alias", power: 'Unknown power' },
    { id: 5, heroName: "William", power: 'Thunder bird' },
    { id: 6, heroName: "Fire storm", power: 'Fire Buster' },
    { id: 7, heroName: "Zoom", power: 'Dark matters' },
    { id: 8, heroName: "Hyper", power: 'Running on air' },
  ]

  dbHeroes:Hero[] = []


  constructor(private _heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroesList()
  }

  addHero(id, name, power){
    this.heroList.push({
      id: id.value,
      heroName: name.value,
      power: power.value
    })
    this.save();
  }

  save() {
    this._heroService.saveHeroes(this.heroList).subscribe((res) => console.log(res),
      (err) => console.log(err));
  }

  // getHeroesList() {
  //   this._heroService.getHeroes().subscribe(heroes => this.dbHeroes = heroes)
  // }


  getHeroesList() {
    this.fetching = true;
    this._heroService.getHeroes().subscribe(heroes => {

      const data = JSON.stringify(heroes)
      // console.log(data);
      
      this.heroList = JSON.parse(data)
      this.fetching = false;
    })
  }

}
