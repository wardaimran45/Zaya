// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Observable , of} from 'rxjs';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductDetailService {

//   constructor(private db: AngularFirestore) { }
  
//   private selectedProductIdSource = new BehaviorSubject<string | null>(null);
//   selectedProductId$ = this.selectedProductIdSource.asObservable();

//   setSelectedProductId(productId: string) {
//     this.selectedProductIdSource.next(productId);
//     console.log(productId)
//   }
  
 
  

  

// }

import { Injectable } from '@angular/core';
import { Observable, of , BehaviorSubject} from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  constructor(private db: AngularFirestore) {}

  private selectedProductIdSource = new BehaviorSubject<string | null>(null);
  selectedProductId$ = this.selectedProductIdSource.asObservable();

  setSelectedProductId(productId: any) {
    this.selectedProductIdSource.next(productId);
        console.log("aoa",productId)
      }
}

