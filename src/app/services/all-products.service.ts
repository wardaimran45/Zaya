import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {
  products: any[] = [];

  selectedCategory!: string;

  constructor(private db : AngularFirestore ) { }

  getProducts(): Observable<any[]> {
    return this.db.collection('products').valueChanges();
  }

  getFilteredProducts(category: string): Observable<any[]> {
    return this.getProducts().pipe(
      map(products => {
        if (category === 'All') {
          return products; 
        } else {
          return products.filter(product => product.category === category);
        }
      })
    );
  }
}
