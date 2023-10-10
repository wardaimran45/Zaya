import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../services/product-detail.service';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: any;
  starIcon = faStar;
  bagIcon = faShoppingBag;
  globeIcon = faGlobe;
  imgIcon = faImage;
  gearIcon = faGear;
  tickIcon = faCheck;
  selectedTab: string = 'Description';
 


  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.productDetailService.selectedProductId$.subscribe((selectedProduct: any) => {
      this.selectedProduct = selectedProduct;
    });
  }
  selectTab(tabName: string) {
    this.selectedTab = tabName;
    console.log("hey", tabName)
  }
}
