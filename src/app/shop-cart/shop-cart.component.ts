import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../services/order.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit{
  products$!: Observable<any[]>;
  starIcon = faStar;

  constructor(private orderService: OrderService){}
  ngOnInit(): void {
    this.products$ = this.orderService.getrelatedProducts();
  }

}
