import { Component, ViewEncapsulation  } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class DropdownComponent {
  cartItems: Product[];
  constructor(private cartService: CartService, private router: Router){
    this.cartItems = cartService.getCart();
  }

  onCloseButtonClick(product: Product) {
    this.cartService.removeFromCart(product);
  }
  goCart(){
    this.router.navigate(['shop-cart'])
  }
  goMenu(){
    this.router.navigate(['menu'])
  }
}
