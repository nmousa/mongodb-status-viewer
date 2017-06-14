/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Injectable } from '@angular/core';
import { WSClient } from './client.service';
import { Headers, Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { Hero } from "../models/hero";

@Injectable()
export class TableService extends WSClient {

    private tablesUrl = 'heroes';  // URL to web api

    constructor(http: Http) {
        super(http);
    }

    getTables(): Observable<Hero[]> {
        return this.getResource(this.tablesUrl);
    }
}