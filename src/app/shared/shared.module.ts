import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertComponent } from './alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent,
    CardComponent,
    MenuCardComponent,
    AlertComponent,
   
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports:[
    InputComponent,
    CardComponent,
    MenuCardComponent,
    AlertComponent,
 
  ]
})
export class SharedModule { }
