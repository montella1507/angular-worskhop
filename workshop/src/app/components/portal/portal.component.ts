import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortalComponent implements OnInit {
  constructor(
    public dataService: DataService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/account/login']);
  }
  getCategory(categories: any[], param) {
    return categories.find(x => x.url === param);
  }

  getSubcategoryName(categories: any[], category, subcategory) {
    const cat =  categories.find(x => x.url === category);
    const subcat = cat ? cat.categories.find(x=> x.url === subcategory) : undefined;
    return subcat?  subcat.name : 'ALL';
  }
  ngOnInit(): void {
  }

}
