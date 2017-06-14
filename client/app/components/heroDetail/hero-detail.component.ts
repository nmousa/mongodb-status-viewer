/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../models/hero";
import { ActivatedRoute, Params } from '@angular/router';
import {TableService} from "../../services/hero.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl: './app/components/heroDetail/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    newHero = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private heroService: TableService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
        });
    }

    save() {
    }

    goBack() {
        window.history.back();
    }
}