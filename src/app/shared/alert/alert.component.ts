import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{

  @Input() color = 'blue'
control: any;
  
  get bgColor(){
    return `bg-${this.color}-400`
  }
  constructor(){}
  ngOnInit(): void {
    
  }
  
  }
