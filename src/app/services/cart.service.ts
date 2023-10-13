import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedProductArraySource = new BehaviorSubject<any[] | null>(null);
  selectedProductArray$ = this.selectedProductArraySource.asObservable();

  constructor(private db: AngularFirestore) { }

  addToCart(product: any) {

    // this.selectedProductArraySource.next(product);
    this.db.collection('cart').add(product);
    console.log("product",product);
    
    console.log("warda",this.selectedProductArray$);
    
    
  }
 
  
}
