import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comment: any = {
    id: 1,
    name: '',
    content: '',
    image: '',
  }
  constructor(private auth: AngularFireAuth, private reviewService: ReviewsService){}

  name= new FormControl('', [
    Validators.required,
    Validators.minLength(3)
   ])
   email= new FormControl('', [
    Validators.required
   ])
   content= new FormControl('', [
    Validators.required
   ])
   comments = new FormGroup({
    name: this.name,
    content: this.content,
  })



  submitComment() {  
    this.reviewService.addComments(this.comment);
    this.comments.reset();
  }
   
}
