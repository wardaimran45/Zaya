// import { Component, OnInit } from '@angular/core';
// import { ProductDetailService } from '../services/product-detail.service';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-product-detail',
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
// export class ProductDetailComponent implements OnInit{
//   selectedProductId: string | null = null;
//   productDetails: any;


//  constructor(private productDetailService: ProductDetailService,  private route: ActivatedRoute
//   ){}
//  ngOnInit(): void {
//   this.productDetailService.selectedProductId$.subscribe(productId => {
//     this.selectedProductId = productId;
// });
   
//  }

// }

import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../services/product-detail.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: any;


  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.productDetailService.selectedProductId$.subscribe((selectedProduct: any) => {
      this.selectedProduct = selectedProduct;
    });
  }
}
