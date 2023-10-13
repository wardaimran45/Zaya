import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { AllProductsService } from 'src/app/services/all-products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  // @Input() src = ''
  // @Input() title = ''
  // @Input() content = ''
  // @Input() price = ''
  menu$!: Observable<any[]>;
  constructor(private allProductsService: AllProductsService){}
  ngOnInit(): void {
    this.menu$ = this.allProductsService.getSpecialProducts();
  }
  

}
