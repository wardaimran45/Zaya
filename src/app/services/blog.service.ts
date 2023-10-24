import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }

  getBlogs(): Observable<any[]> {  
    return this.db.collection('blogs').valueChanges();
  }
}
