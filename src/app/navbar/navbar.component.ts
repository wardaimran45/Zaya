import { Component, OnInit ,HostListener, ElementRef, Renderer2 , Input } from '@angular/core';
import { faEur, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() itemCount: number = 0;
  filmIcon = faFilm;
  userIcon = faUser;
  cartIcon = faShoppingBag
  public isNavbarFixed = false;
  showMiniCart: boolean = false;
  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
    
  }
   
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollY = window.scrollY;
    // Define the scroll position at which you want to toggle the fixed navbar
    const scrollThreshold = 100;

    if (scrollY > scrollThreshold && !this.isNavbarFixed) {
      this.isNavbarFixed = true;
    } else if (scrollY <= scrollThreshold && this.isNavbarFixed) {
      this.isNavbarFixed = false;
    }
  }
  toggleMiniCart() {
    this.showMiniCart = !this.showMiniCart;
  }
  get cartItemCount() {
    return this.cartService.cartItemCount;
  }

}
