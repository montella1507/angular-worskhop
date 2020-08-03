import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CartButtonComponent implements OnInit {
  @Input() properties;

  constructor() { }

  ngOnInit(): void {
  }



}
