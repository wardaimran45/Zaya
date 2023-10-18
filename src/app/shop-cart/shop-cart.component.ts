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

  constructor(private orderService: OrderService, private cartService: CartService , private router: Router){}
  ngOnInit(): void {
    this.products$ = this.orderService.getrelatedProducts();
    this.cartItems = this.cartService.getCart();
  }
 orderNow(){
   this.router.navigate(['checkout'])
 }
}
