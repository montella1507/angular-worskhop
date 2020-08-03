import { Component, OnInit, Input, EventEmitter, Output,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PagerComponent implements OnInit {

  @Input() currentPage;
  @Input() maxPage;

  @Output() selected = new EventEmitter();

  getPages() {
    return Array.from({ length: this.maxPage }, (v, k) => k + 1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
