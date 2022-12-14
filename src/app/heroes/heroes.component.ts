import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Winstorm',
  };
  heroes: Hero[] = [];
  selectedHero?: Hero = null;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hero id add ${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  constructor(
    private heroService: HeroService,
    public messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getHeroes();
  }
}
