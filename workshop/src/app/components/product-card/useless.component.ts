import { Component, OnInit, Input, Output, EventEmitter, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { ProductCardService } from './product-card.service';


@Component({
    selector: 'app-useless',
    template: `  
    <div class="product-component-name" title="Hoodie">
    {{ pcService.name }}
  </div>
  <div class="product-component-price">
    $ {{ pcService.price }}
  </div>`
})
export class UselessComponent implements OnInit {

    constructor(
        public pcService: ProductCardService
    ) { }

    ngOnInit(): void {
    }

}
