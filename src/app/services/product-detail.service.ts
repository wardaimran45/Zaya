import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  constructor(private db: AngularFirestore) {}

  private selectedProductIdSource = new BehaviorSubject<string | null>(null);
  selectedProductId$ = this.selectedProductIdSource.asObservable();

  setSelectedProductId(productId: any) {
    this.selectedProductIdSource.next(productId);
    console.log("id", this.selectedProductIdSource);
    
      }
}

