import { Component } from '@angular/core';
import { FOODS } from './food_list';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  foods = FOODS; 
  constructor(){
   console.log(this.foods);   
  }    
   }



