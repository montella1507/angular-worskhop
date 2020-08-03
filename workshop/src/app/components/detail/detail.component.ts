import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pack } from 'src/app/models/pack.model';
import { Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  vm$: Observable<Pack<any>>;

  selectedSize;
  selectedLength;
  selectedColor;

 selectedImage;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.vm$ = combineLatest([
      this.route.params,
      this.dataService.products$
    ]).pipe(
      map(([params, products]) => {
        return {
          loading: products.loading,
          data: products.loading ? null :
            {
              product: products.data.find(x => x.url === params.product)
            }
        };
      }),
      tap(pack => {
        if (!pack.loading) {
          this.selectedColor = pack.data.product.filters.colors[0];
          this.selectedLength = pack.data.product.filters.lengths[0];
          this.selectedSize = pack.data.product.filters.sizes[0];
          this.selectedImage = pack.data.product.images[0];
        }
      })
    );
  }

  ngOnInit(): void {
  }

}
