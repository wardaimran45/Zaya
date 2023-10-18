import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFirestore) {}

  saveOrder(orderDetails: any) {
    return this.db.collection('orders').add(orderDetails);
  }
  getrelatedProducts(): Observable<any[]> {  
    return this.db.collection('relatedProducts').valueChanges();
  }
}
