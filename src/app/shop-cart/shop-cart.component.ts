import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../services/order.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../models/product.models';
import { CartService } from '../services/cart.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit{
  products$!: Observable<any[]>;
  starIcon = faStar;
  cartItems: Product[] = [];
  arrowIcon = faArrowRight;
  selectedProduct: any

  constructor(private orderService: OrderService, private cartService: CartService , private router: Router){}
  ngOnInit(): void {
    this.products$ = this.orderService.getrelatedProducts();
    this.cartItems = this.cartService.getCart();
    console.log("cart Items cart page", this.cartItems);
  }
  onQuantityChange(event: any, product: Product) {
    const newQuantity = event;
    
    // Update the quantity of the product in the cartItems array
    this.cartItems = this.cartItems.map((item) => {
      if (item.id === product.id) {
        item.qty = newQuantity;
      }
      return item;
    })

    this.products$.subscribe((products) => {
      products = products.map((p) => {
        if (p.id === product.id) {
          p.qty = newQuantity;
        }
        return p;
      });
      // Now you can update the products$ observable with the modified array.
      this.products$ = new Observable((subscriber) => {
        subscriber.next(products);
      });
    });
  }
 
  
 orderNow(){
   this.router.navigate(['checkout'])
 }
 onCloseButtonClick(product: Product) {
  this.cartService.removeFromCart(product);
}
addToCart(selectedProduct: any) {

      this.cartService.addToCart(selectedProduct);
  console.log("shop cart page",selectedProduct)
}
}
