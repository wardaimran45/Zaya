import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../services/product-detail.service';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { ReviewsService } from '../services/reviews.service';
import { Observable} from 'rxjs';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  slideState = 'in';
  currentIndex = 0;
  totalSlides = 3; // Adjust this according to your number of slides
  selectedProduct: any;
  starIcon = faStar;
  bagIcon = faShoppingBag;
  globeIcon = faGlobe;
  imgIcon = faImage;
  gearIcon = faGear;
  tickIcon = faCheck;
  starOutline = farStar
  selectedTab: string = 'Description';
  reviews$!: Observable<any[]>;
  arrowRight = faArrowCircleRight
  arrowLeft = faArrowCircleLeft
 


  constructor(
    private productDetailService: ProductDetailService,
    private reviewService: ReviewsService,
    private cartService: CartService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.productDetailService.selectedProductId$.subscribe((selectedProduct: any) => {
      this.selectedProduct = selectedProduct;

    });
    this.reviews$ = this.reviewService.getReviews();
  }
  selectTab(tabName: string) {
    this.selectedTab = tabName;
  }
  generateStars(rating: number): any[] {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(this.starIcon);
    }
    return stars;
  }
  getStarIcon(index: number, rating: number): any {
    // Use solid star icon for filled stars up to the rating value
    if (index <= rating) {
      return this.starIcon;
    } else {
      // Use regular star icon for unfilled stars
      return this.starOutline;
    }
  }
  addToCart(selectedProduct: any){
    const dataToPass = [{
      image: this.selectedProduct.image,
      title: this.selectedProduct.title,
      quantity: selectedProduct.qty,
      price: this.selectedProduct.price,
    }];

    // Set the data in the shared service
    this.cartService.addToCart(selectedProduct);
    this.router.navigate(['checkout']);
   
    // this.cartService.getCart(dataToPass);
    console.log(dataToPass)

  }
 
  
  
}
