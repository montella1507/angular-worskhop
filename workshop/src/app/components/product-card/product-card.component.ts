import { Component, OnInit, Input, Output, EventEmitter, Injectable, SimpleChanges, OnChanges } from '@angular/core';
import { ProductCardService } from './product-card.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [
    ProductCardService
  ]
})
export class ProductCardComponent implements OnInit, OnChanges {

  @Input() id;
  @Input() url;
  @Input() imageUrl;
  @Input() name;
  @Input() price;



  @Output() selected = new EventEmitter();
  constructor(
    private pcService: ProductCardService
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.pcService.name = changes['name'].currentValue;
    this.pcService.price = changes['price'].currentValue;
  }

  ngOnInit(): void {
  }

}
