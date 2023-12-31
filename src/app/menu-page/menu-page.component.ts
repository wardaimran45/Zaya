import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../services/all-products.service';
import { Observable} from 'rxjs';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {ProductDetailService}  from '../services/product-detail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit{
  filterIcon = faFilter;
  products$!: Observable<any[]>;
  selectedCategory: string = 'All'; 
  selectedProductId: string | null = null;


  constructor(private allProductsService: AllProductsService,
    private productDetailService: ProductDetailService, private router: Router){}

  ngOnInit(): void {
    this.products$ = this.allProductsService.getProducts();
    
    this.loadProducts();
  }
  loadProducts() {
    this.products$ = this.allProductsService.getFilteredProducts(this.selectedCategory);
  }
  filterProducts(category: string) {
    this.selectedCategory = category;
    console.log('Selected Category:', this.selectedCategory);

    this.loadProducts();
  }

  onCardClick(productId: { id: string,}) {
    const id = productId.id;
    const selectedProduct = { ...productId };
    this.productDetailService.setSelectedProductId(selectedProduct);
    this.router.navigate(['product-detail', id]);
  }  
}
