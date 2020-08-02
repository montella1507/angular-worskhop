import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Pack } from '../models/pack.model';
import { delay } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class DataService {


    categories$: BehaviorSubject<Pack<any[]>> = new BehaviorSubject<Pack<any[]>>({
        data: [],
        loading: true
    });
    products$: BehaviorSubject<Pack<any[]>> = new BehaviorSubject<Pack<any[]>>({
        loading: true,
        data: []
    });

    constructor(private http: HttpClient) {

    }

    loadProducts() {
        return this.http.get('/assets/data/products.json')
            .pipe(delay(500))
            .subscribe(x => this.products$.next({
                data: x as any,
                loading: false
            }));
    }

    loadCategories() {
        return this.http.get('/assets/data/categories.json')
            .pipe(delay(500))
            .subscribe(x => this.categories$.next({
                loading: false,
                data: x as any
            }));
    }
}