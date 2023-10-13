import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private db : AngularFirestore) { }

  getReviews(): Observable<any[]> {  
    return this.db.collection('reviews').valueChanges();
  }
  addReview(review: any) {
    console.log("review", review);
    
    this.db.collection('reviews').add(review);
  }

}
