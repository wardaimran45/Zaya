import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() src = ''
  @Input() title = ''
  @Input() content = ''
  @Input() price = ''
  constructor(){}
  ngOnInit(): void {
    
  }

}
