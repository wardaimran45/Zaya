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
   lName= new FormControl('', [
    Validators.required,
    Validators.minLength(3)
   ])
   cName= new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
   ])
   province= new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
   ])
   zipCode= new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
   ])
  orderForm = new FormGroup({
    fName: this.fName,
    email: this.email,
    phoneNo: this.phoneNo,
    address: this.address,
    lName: this.lName,
    cName: this.cName,
    province: this.province,
    zipCode: this.zipCode
  })
 ngOnInit(): void {
  const formDataJSON = localStorage.getItem('orderFormData');
  if (formDataJSON) {
    const formData = JSON.parse(formDataJSON);
    this.orderForm.patchValue(formData);
  }
}

getTotalAmount() {
  return this.cartItems.reduce((total, cartItems) => total +  cartItems.price *  cartItems.qty, 0);
}

placeOrder() {
  const formData = this.orderForm.value;
  const cartItems = this.cartItems;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem('orderFormData', formDataJSON);
  const orderDetails = {
    ...formData,
    cartItems: cartItems
  };

  if (this.authService.isAuthenticated()) {
    this.orderService.saveOrder(orderDetails);
    localStorage.removeItem('orderFormData');
    this.cartService.clearCart();
    this.router.navigate(['/order-placed']);
  } else {
    this.router.navigate(['/login']);
  }

}
}

