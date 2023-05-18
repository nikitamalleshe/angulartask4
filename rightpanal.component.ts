import { Component, Input } from '@angular/core';
import { DATAS } from './data_list';

@Component({
  selector: 'app-rightpanal',
  templateUrl: './rightpanal.component.html',
  styleUrls: ['./rightpanal.component.css']
})
export class RightpanalComponent {

  addnote()
  {
    alert(" Add your Note Here !!");
  }
  adddetails()
  {
    alert(" Add your Details Here!!");
  }
  chnage()
  {
    alert(" Change Address");
  }
  onClose() 
  {
  }
  showCouponPopup: boolean = false;
  selectedCoupon: any = null;
  showCheckoutPopup: boolean = false;
  showadddetailsPopup: boolean=false;
  couponCodes = [
    { name: 'HUNGER20', discount: 20 },
    { name: 'SAVE10', discount: 10 },
    { name: 'SPECIAL25', discount: 25 },
  ];

  handleCouponSelect(coupon: any): void {
    this.selectedCoupon = coupon;
    this.showCouponPopup = false;
  }

  handleApplyCoupon(): void {
    this.selectedCoupon = null;
  }

  handleCheckout(): void {
    this.showCheckoutPopup = true;
  }

  handleClosePopup(): void {
    this.showCheckoutPopup = true;
  }
  handleadddetailsPopup(): void {
    this.showadddetailsPopup = true;
  }
  

  items = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 8.99 }
  ];

  totalAmount = this.items.reduce((total, item) => total + item.price, 0);

  

  data = DATAS;
  constructor(){
   console.log(this.data);   
}
}