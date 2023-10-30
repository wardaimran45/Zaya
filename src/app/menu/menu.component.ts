import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllProductsService } from '../services/all-products.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import {ProductDetailService}  from '../services/product-detail.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  products$!: Observable<any[]>;
  constructor(private allProductsService: AllProductsService, private productDetailService: ProductDetailService, private router: Router){}

  ngOnInit(): void {
    this.products$ = this.allProductsService.getSomeProducts();
  }
  onCardClick(productId: { id: string,}) {
    const id = productId.id;
    const selectedProduct = { ...productId };
    this.productDetailService.setSelectedProductId(selectedProduct);
    this.router.navigate(['product-detail', id]);
  }
}
