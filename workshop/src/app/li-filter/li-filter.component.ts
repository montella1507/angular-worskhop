import { Component, OnInit, Input, Output, EventEmitter, ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[liFilterTemplate]'
})
export class LiFilterTemplateDirective { }

@Component({
  selector: 'app-li-filter',
  templateUrl: './li-filter.component.html',
  styleUrls: ['./li-filter.component.scss']
})
export class LiFilterComponent implements OnInit {

  @ContentChild(LiFilterTemplateDirective, {
    read: TemplateRef,
    static: false
  }) customTemplate;
  @Input() values;
  @Input() selectedValue;
  @Output() onValueSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
