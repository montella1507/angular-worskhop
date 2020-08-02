import { Component } from '@angular/core';
import { DataService } from './services/data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop';
  products: any[];
  categories: any[];
  constructor(
    private dataService: DataService
  ) {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  loadCategories() {
    this.dataService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
