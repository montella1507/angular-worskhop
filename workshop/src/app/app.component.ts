import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from './services/data-service.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    public dataService: DataService
  ) {
    this.dataService.loadProducts();
    this.dataService.loadCategories();
  }


}
