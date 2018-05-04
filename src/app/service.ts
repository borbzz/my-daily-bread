import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {}
    path = 'assets/mydailybread.json';

    get() {
        return this.http.get(this.path);
    }

}