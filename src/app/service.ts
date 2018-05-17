import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/do";

import { ReaderState } from './core';


@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    /**
     * retrieves the book
     */
    get() : Observable<Object> {      
        return this.getFromCache() ||
                this.getFromServer();
    }

    get state() : ReaderState {
        var json = localStorage.getItem('state');

        return json
            ? JSON.parse(json)
            : new ReaderState();
    }
    
    set state(state: ReaderState) {
        localStorage.setItem('state', JSON.stringify(state));
    }


    /**
     * attempts to retrieve the book from localstorage
     */
    private getFromCache() : Observable<Object> {
        var json = localStorage.getItem('mdb');

        return json
            ? Observable.of(JSON.parse(json))
            : null;
    }

    /**
     * retrieves the book from the server, caching the result
     */
    private getFromServer() : Observable<Object> {
        return this.http
            .get('assets/mydailybread.json')
            .do(books => localStorage.setItem('mdb', JSON.stringify(books)));
    }

}