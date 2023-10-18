import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { AllProductsService } from 'src/app/services/all-products.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  menu$!: Observable<any[]>;
  selectedProduct: any
  constructor(private allProductsService: AllProductsService, private cartService: CartService){}
  ngOnInit(): void {
    this.menu$ = this.allProductsService.getSpecialProducts();    
  }
  addToCart(selectedProduct: any) {
    const dataToPass = [{
      image: selectedProduct.image,
      title: selectedProduct.title,
      qty: selectedProduct.qty,
      price: selectedProduct.price,
    }];
    selectedProduct.qty = 1;
    this.cartService.addToCart(selectedProduct);
  }
  
}
