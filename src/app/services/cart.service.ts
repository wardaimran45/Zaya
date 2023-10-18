import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private selectedProductArraySource = new BehaviorSubject<any[] | null>(null);
  // selectedProductArray$ = this.selectedProductArraySource.asObservable();
  private cartItems: Product[] = [];
  cartItemCount: number = 0;



  constructor(private db: AngularFirestore) {
    // Initialize the cart from local storage if available
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
   }
   addToCart(product: Product) {
    this.cartItems.push(product);
    this.updateLocalStorage();
    this.cartItemCount = this.cartItems.length;
    console.log("count",this.cartItemCount);
    
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateLocalStorage();
      this.cartItemCount = this.cartItems.length;
    }
  }

  getCart() {
    return this.cartItems;
  }

  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  // addToCart(product: any) {

  //   // this.selectedProductArraySource.next(product);
  //   this.db.collection('cart').add(product);
  //   console.log("service product",product);
    
  //   console.log("service warda",this.selectedProductArray$);
    
    
  // }
  
  
}
