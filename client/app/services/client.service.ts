import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
//import { cloneDeep } from 'lodash';

/**
 * Base web service client class
 */
export class WSClient {

    public baseURL = '/api';

    constructor(private http: Http) {
    }

    protected getResource(resource: string): Observable<any> {
        const response = this.http.get(`${this.baseURL}/${resource}`);
        return this.processResponse(response);
    }

    protected postResource(resource: string, data: any, params: Object = {}): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const response = this.http.post(`${this.baseURL}/${resource}`, data);
        return this.processResponse(response);
    }

    private processResponse(obs: Observable<Response>): Observable<any> {
        const response = obs.map(resp => resp['_body'] ? resp.json() : false);
        return this.actLikeSafePromise(response);
    }


    private actLikePromise<T>(obs: Observable<T>): Observable<T> {
        const hot = obs.publishReplay(1);
        hot.connect();
        return hot;
    }

    private actLikeSafePromise<T>(obs: Observable<T>): Observable<T> {
        return this.makeSafeFromMutation(this.actLikePromise(obs));
    }

    private makeSafeFromMutation<T>(obs: Observable<T>): Observable<T> {
        return obs.map(e => e);
        // return obs.map(e => _.cloneDeep(e));
    }
}
