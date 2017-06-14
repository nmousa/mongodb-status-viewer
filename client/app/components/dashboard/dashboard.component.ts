/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from "../../models/hero";
import { TableService } from "../../services/hero.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    tables: Hero[] = [];

    constructor(
        private router: Router,
        private tableService: TableService) {
    }

    ngOnInit() {
        this.tableService.getTables()
            .subscribe(t => {
                console.log("setting", t);
                this.tables = t;
            }
            );
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero._id];
        this.router.navigate(link);
    }
}