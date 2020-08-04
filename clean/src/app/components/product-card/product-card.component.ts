import { Component, OnInit, Input } from '@angular/core';

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

  
  constructor() { }

  ngOnInit(): void {
  }

}
