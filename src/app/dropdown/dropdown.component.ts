import { Component, ViewEncapsulation  } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.models';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class DropdownComponent {
  cartItems: Product[];
  constructor(private cartService: CartService){
    this.cartItems = cartService.getCart();
  }

  onCloseButtonClick(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
