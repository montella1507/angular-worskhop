import { Component, OnInit } from '@angular/core';
import { transition, trigger, query, stagger, animate, style } from '@angular/animations';
import { DataService } from 'src/app/services/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { Pack } from 'src/app/models/pack.model';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.2s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.2s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {


  ngOnInit(): void {
  }

  prices = [10, 20, 30, 50, 100, 1000];
  vm$: Observable<Pack<any>>;
  constructor(
    private dataService: DataService,
    public router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.vm$ = combineLatest([
      this.activatedRoute.params,
      this.activatedRoute.queryParams,
      this.dataService.products$,
      this.dataService.categories$
    ]).pipe(
      map(
        ([params, queryParams, products, categories]) => {
          const currentCategory = categories.data.find(category => category.url === params.category);
          let subcategories = currentCategory ? currentCategory.categories : [];
          subcategories = subcategories.map(x => x.url === params.subcategory ? { ...x, active: true } : x);
          // Zakladni filtrovani podle kategorie 
          let filteredProducts = products.data.filter(
            x => x.filters.category === params.category);

          if (params.subcategory !== 'all') {
            filteredProducts = filteredProducts.filter(x => x.filters.subcategory === params.subcategory);
          }


          if (queryParams.color) {
            filteredProducts = filteredProducts.filter(x => x.filters.colors.indexOf(queryParams.color) !== -1);
          }

          if (queryParams.size) {
            filteredProducts = filteredProducts.filter(x => x.filters.sizes.indexOf(queryParams.size) !== -1);
          }


          if (queryParams.length) {
            filteredProducts = filteredProducts.filter(x => x.filters.lengths.indexOf(queryParams.length) !== -1);
          }

          if (queryParams.price) {
            filteredProducts = filteredProducts.filter(x => x.price < queryParams.price);
          }


          const maxPage = Math.floor(((filteredProducts.length * 1.0) / 6.0) + 1);
          if (queryParams.page) {
            filteredProducts = filteredProducts.filter((_, index) => index > (queryParams.page - 1) * 6);
            filteredProducts = filteredProducts.filter((_, index) => index < 6);

          }




          let colors = products.data.reduce((acc, product) => [...acc, ...product.filters.colors], []);
          let sizes = products.data.reduce((acc, product) => [...acc, ...product.filters.sizes], []);
          let lengths = products.data.reduce((acc, product) => [...acc, ...product.filters.lengths], []);
          // Unique only
          colors = colors.filter((x, i) => colors.indexOf(x) === i);
          sizes = sizes.filter((x, i) => sizes.indexOf(x) === i);
          lengths = lengths.filter((x, i) => lengths.indexOf(x) === i);

          return ({
            loading: products.loading || categories.loading,
            data: {
              params,
              queryParams,
              products: filteredProducts,
              categories: categories.data,
              subcategories: subcategories,
              page: queryParams.page,
              maxPage: maxPage,
              colors,
              sizes,
              lengths
            }
          })
        }));
  }


  getQueryParams(queryParams, property, value) {
    return {
      ...queryParams,
      [property]: value
    };
  }


  onProductSelected(url) {
    this.router.navigate([
      'catalog',
      this.activatedRoute.snapshot.params['category'],
      this.activatedRoute.snapshot.params['subcategory'],
      url])
  }

}
