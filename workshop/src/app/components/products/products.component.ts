import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { Pack } from 'src/app/models/pack.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  ngOnInit(): void {
  }

  vm$: Observable<Pack<any>>;
  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.vm$ = combineLatest([
      this.activatedRoute.params,
      this.activatedRoute.queryParams,
      this.dataService.products$,
      this.dataService.categories$
    ]).pipe(
      map(
        ([params, queryParams, products, categories]) => ({
          loading: products.loading || categories.loading,
          data: {
            params,
            queryParams,
            products: products.data,
            categories: categories.data
          }
        })));
  }

  getfilteredProducts() {

  }


  onProductSelected(url) {
    this.router.navigate([
      'catalog',
      this.activatedRoute.snapshot.params['category'],
      this.activatedRoute.snapshot.params['subcategory'],
      url])
  }

}
