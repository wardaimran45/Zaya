import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductDetailService } from '../services/product-detail.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.models';
@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent implements OnInit{
 
  @Output() quantityChange = new EventEmitter<number>();
  cartItems: Product[] = [];
  constructor(private productDetailService: ProductDetailService, private cartService: CartService) { }


  
  ngOnInit(): void {

    
  }
  @Input() qty: number = 1;

  incrementQuantity() {
    this.qty++;
    this.quantityChange.emit(this.qty);
  }

  decrementQuantity() {
    if (this.qty > 0) {
      this.qty--;
      this.quantityChange.emit(this.qty);
    }
  }

}
