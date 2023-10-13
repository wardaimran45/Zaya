import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  starIcon = faStar;
  starReg = farStar
  review: any = {
    name: '',
    email: '',
    content: '',
    star: 0,
  };
  

  
  selectedRating: number = 0; // Default to no rating
  constructor(private auth: AngularFireAuth, private reviewService: ReviewsService){}

  name= new FormControl('', [
    Validators.required,
    Validators.minLength(3)
   ])
   email= new FormControl('', [
    Validators.required
   ])
   star= new FormControl('', [
    Validators.required
   ])
   content= new FormControl('', [
    Validators.required
   ])
   reviews = new FormGroup({
    name: this.name,
    email: this.email,
    content: this.content,
    star: this.star
  })

  
  selectRating(star: number) {
    this.selectedRating = star;
  }

  submitReview() {
    if (this.selectedRating === 0) {
      alert('Please select a rating before submitting.');
      return;
    }
    
    this.review.star = this.selectedRating;
    this.reviewService.addReview(this.review);

    this.reviews.reset();
  }
   
   

}
