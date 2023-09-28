import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    InputComponent,
    CardComponent,
    MenuCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports:[
    InputComponent,
    CardComponent,
    MenuCardComponent
  ]
})
export class SharedModule { }
