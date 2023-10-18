import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetailService } from '../services/product-detail.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
  @Input() qty: number = 1;
  @Output() quantityChange = new EventEmitter<number>();

  constructor(private productDetailService: ProductDetailService, private cartService: CartService) { }


  
  

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
