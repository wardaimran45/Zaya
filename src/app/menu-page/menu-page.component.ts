import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../services/all-products.service';
import { Observable, map , filter} from 'rxjs';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit{
  filterIcon = faFilter;
  products$!: Observable<any[]>;
  selectedCategory: string = 'All'; 

  constructor(private allProductsService: AllProductsService){}

  ngOnInit(): void {
    this.products$ = this.allProductsService.getProducts();
    this.loadProducts();
  }
  loadProducts() {
    // Fetch products based on the selected category
    this.products$ = this.allProductsService.getFilteredProducts(this.selectedCategory);
  }
  filterProducts(category: string) {
    this.selectedCategory = category;
    console.log('Selected Category:', this.selectedCategory);

    // Load products based on the selected category
    this.loadProducts();
  }
 
}
