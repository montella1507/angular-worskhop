import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorPickerComponent implements OnInit {

  @Input() colors;
  @Input() selectedColor;
  @Output() colorPicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
