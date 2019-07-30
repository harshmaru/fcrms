import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { OrderService } from 'src/app/services/order.service';
declare const M:any;

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  M:any;
  url:any=""
  cart=[];
  user={};

  constructor(public cartSvc:CartService, private router:Router,private localSvc:LocalStorageService,private orderSvc:OrderService) { }

  ngOnInit() {
    M.Modal.init(document.querySelector("#address-modal"));
    this.user = this.localSvc.retrieve("user");
    this.url=this.router.url;
    this.M=M;
    this.cart=this.cartSvc.getCart();
    this.cartSvc.getCartObservable().subscribe((val) => {
      this.cart = val;
    })
  }
  dismissModal(){
    let instance = M.Modal.getInstance(document.querySelector("#cart-modal"));
    instance.close();
  }
  processOrder(){
    let processCart=this.cart
    processCart.forEach(element => {
      delete element['pname'];
      delete element['pdescription'];
      delete element['pimg'];
      delete element['type'];
      delete element['visible'];
      element['total']=element.price*element.qty;
      element['status']="Confirmed";
      element['pmethod']="COD";
      element['uid']=this.user['uid'];
    });
    // console.log(processCart);
    this.orderSvc.addOrder(processCart).subscribe((val)=>{
      if(val['status']){
        M.toast({html: val['message']});
        this.cartSvc.clearCart();
        this.router.navigateByUrl("/");
      }
      else{
        M.toast({html: val["message"]})
        console.log(val['extra']);
      }
    })
  }
  openAddressModal(){
    M.Modal.init(document.querySelector("#address-modal"));
  }
}
