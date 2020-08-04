import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) {
    dataService.loadCategories();
    dataService.loadProducts();
  }

  ngOnInit(): void {
  }

  selectedLength = 1;



}
