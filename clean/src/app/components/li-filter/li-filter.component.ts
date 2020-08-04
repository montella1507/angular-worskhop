import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-li-filter',
  templateUrl: './li-filter.component.html',
  styleUrls: ['./li-filter.component.scss']
})
export class LiFilterComponent implements OnInit {


  @Input() values;
  @Input() selectedValue;
  @Output() onValueSelected = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
