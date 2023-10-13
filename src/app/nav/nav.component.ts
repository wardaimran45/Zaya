import { Component, OnInit ,HostListener, ElementRef, Renderer2 } from '@angular/core';
import { faEur, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  implements OnInit{
  filmIcon = faFilm;
  userIcon = faUser;
  cartIcon = faShoppingBag
  public isNavbarFixed = false;
  public icon = false;

  constructor(){

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
      this.icon = true
    } else if (scrollY <= scrollThreshold && this.isNavbarFixed) {
      this.isNavbarFixed = false;
      this.icon = false;
    }
  }

}
