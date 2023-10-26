import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }

  private selectedBlogIdSource = new BehaviorSubject<string | null>(null);
  selectedBlogId$ = this.selectedBlogIdSource.asObservable();

  getBlogs(): Observable<any[]> {  
     return this.db.collection('blogs').valueChanges();
  }

  setSelectedBlogId(blogId: any) {
    this.selectedBlogIdSource.next(blogId);
    console.log("id", this.selectedBlogIdSource);
      }
}
