/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
import {TableService} from "../../services/hero.service";
import {Hero} from "../../models/hero";
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/heroes/heroes.component.html'
})

export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;
    error: any;

    constructor(
        private router: Router,
        private heroService: TableService) { }
    getHeroes() {
        this.heroService.getTables().subscribe(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero._id]);
    }

    addHero() {
        this.selectedHero = null;
        this.router.navigate(['/detail', 'new']);
    }
}
