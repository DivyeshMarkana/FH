import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _heroService: HeroService ) { }
  hero: Hero;

  ngOnInit(): void {
    this.getH()
  }

  getH(){

    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this._heroService.getHero(id).subscribe(h => h.id !== id));
    
  }  

}
