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
    this.db.collection('reviews').add(review);
  }
  getComments(): Observable<any[]> {  
    return this.db.collection('comment').valueChanges();
  }
  addComments(comment: any) {    
    this.db.collection('comment').add(comment);
  }

}
