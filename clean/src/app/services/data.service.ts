import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Pack } from '../models/pack.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    products$: BehaviorSubject<Pack<any>> = new BehaviorSubject({
        loading: true,
        data: []
    });

    categories$: BehaviorSubject<Pack<any>> = new BehaviorSubject({
        loading: true,
        data: []
    });


    loadProducts() {
        this.http.get("assets/data/products.json")
            .pipe(
                delay(400)
            )
            .subscribe((data: any) => {
                this.products$.next({ loading: false, data: data });
            });
    }

    loadCategories() {
        this.http.get("assets/data/categories.json")
            .pipe(
                delay(400)
            )
            .subscribe((data: any) => {
                this.categories$.next({ loading: false, data: data });
            });
    }
}