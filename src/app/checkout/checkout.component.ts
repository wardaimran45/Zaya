import { Component, OnInit } from '@angular/core';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
 circleIcon = faCircle;
 selectedItems: any ;

  
 constructor(private cartService: CartService){

  }

 ngOnInit(): void {

  this.cartService.selectedProductArray$.subscribe((selectedItems: any) => {
    this.selectedItems = selectedItems;
    console.log("selected items",selectedItems);
})
}



}

