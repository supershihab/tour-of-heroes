import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock.heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
   hero: Hero = {
     id: 1,
     name: 'Superman',
   }
   heroes = HEROES;
   selectedHero?: Hero;

   onSelected(hero: Hero): void {
     this.selectedHero = hero;
   }
}


//https://akabab.github.io/superhero-api/api/all.json