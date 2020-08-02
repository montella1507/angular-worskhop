import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() id;
  @Input() url;
  @Input() imageUrl;
  @Input() name;
  @Input() price;


  @Output() selected = new EventEmitter();;
  constructor() { }

  ngOnInit(): void {
  }

}
