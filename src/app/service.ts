import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/do";


@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    get() : Observable<Object> {      
        return this.getFromCache() ||
                this.getFromServer();
    }

    private getFromCache() : Observable<Object> {
        var json = localStorage.getItem('mdb');

        return json
            ? Observable.of(JSON.parse(json))
            : null;
    }

    private getFromServer() : Observable<Object> {
        return this.http
            .get('assets/mydailybread.json')
            .do(books => localStorage.setItem('mdb', JSON.stringify(books)));
    }

}