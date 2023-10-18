import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.models';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
 circleIcon = faCircle;
 selectedItems: any ;
 cartItems: Product[];


 constructor(private cartService: CartService, private router: Router, private authService: AuthService, private orderService: OrderService){
  this.cartItems = cartService.getCart();
  }
  fName= new FormControl('', [
    Validators.required,
    Validators.minLength(5)
   ])
   email= new FormControl('', [
    Validators.required,
    Validators.email
   ])
   
   phoneNo= new FormControl('', [
    Validators.required,
    Validators.maxLength(11)
   ])
   address= new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
   ])
  orderForm = new FormGroup({
    fName: this.fName,
    email: this.email,
    phoneNo: this.phoneNo,
    address: this.address
  })
 ngOnInit(): void {
}

getTotalAmount() {
  return this.cartItems.reduce((total, cartItems) => total +  cartItems.price *  cartItems.qty, 0);
}

placeOrder() {

  // if(this.orderForm.valid){
  //   const formData = this.orderForm.value
  //   console.log("form",formData);
    
  // }
  const formData = this.orderForm.value;
  const cartItems = this.cartItems;
  const orderDetails = {
    ...formData, // Spread the form data
    cartItems: cartItems // Add cart items as a property
};
  if (this.authService.isAuthenticated()) {
      this.orderService.saveOrder(orderDetails)
    alert("Order Placed")
    this.router.navigate(['/order-placed']);
   
  } 
  else {
    this.router.navigate(['/login']);
  }
  console.log("checking", formData);
  console.log("checking cart", cartItems);
  
  
}


}

