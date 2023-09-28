import { Component, OnInit, Input} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit{
  @Input() img = ''
  @Input() title = ''
  @Input() content = ''
  @Input() price = ''
  @Input() star = ''

  starIcon = faStar;

  constructor(){}

  ngOnInit(): void {
    
  }
}
