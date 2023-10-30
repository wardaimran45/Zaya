import { Component, OnInit ,HostListener, ElementRef, Renderer2 , Input} from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  implements OnInit{
  @Input() itemCount: number = 0;
  filmIcon = faFilm;
  userIcon = faUser;
  cartIcon = faShoppingBag
  public isNavbarFixed = false;
  public icon = false;
  showMiniCart: boolean = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private cartService: CartService){

  }
  ngOnInit(): void {
    
  }
 
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollY = window.scrollY;
    const scrollThreshold = 100;

    if (scrollY > scrollThreshold && !this.isNavbarFixed) {
      this.isNavbarFixed = true;
      this.icon = true
    } else if (scrollY <= scrollThreshold && this.isNavbarFixed) {
      this.isNavbarFixed = false;
      this.icon = false;
    }
  }
  openCartModal() {
    const modalElement = this.elementRef.nativeElement.querySelector('#cartModal');
    this.renderer.addClass(modalElement, 'show');
    this.renderer.setStyle(modalElement, 'display', 'block');
  }
  toggleMiniCart() {
    this.showMiniCart = !this.showMiniCart;
  }
  get cartItemCount() {
    return this.cartService.cartItemCount;
  }
  
}
