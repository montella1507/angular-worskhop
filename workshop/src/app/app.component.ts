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
  constructor(
    private dataService: DataService
  ) {
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
