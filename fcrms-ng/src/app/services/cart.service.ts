import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=[];

  constructor(private localSvc:LocalStorageService) {
    this.localSvc.observe("cart").subscribe((val)=>{
      this.cart=val
    })
  }

  initCart(){
    if(this.localSvc.retrieve("cart")){
      this.cart = this.getCart();
    }
    else{
      this.cart = [];
    }
    this.setCart(this.cart)
  }

  getCart(){
    return this.localSvc.retrieve("cart");
  }
  getCartObservable(){
    return this.localSvc.observe("cart");
  }
  setCart(value){
    this.localSvc.clear("cart");
    this.localSvc.store("cart",value)
  }

  addToCart(product){
    let flag1=0;
    this.cart.forEach(element => {
      if(element.pid === product.pid){
        flag1=1;
        element.qty = element.qty+1;
      }
    });
    if(flag1===0){
        product["qty"] = 1;
        this.cart.push(product);
    }
    this.setCart(this.cart);
  }
  removeFromCart(product){
    this.cart = this.getCart();
    let flag1 = 0;
    this.cart.forEach(element => {
      if (element.pid === product.pid && element.qty > 1) {
        flag1 = 1;
        element.qty = element.qty - 1;
      }
    });
    if (flag1 === 0) {
      this.cart.splice(this.cart.indexOf(product),1);
    }
    this.setCart(this.cart);
  }
  deleteProduct(product){
    this.cart=this.getCart();
    this.cart.splice(this.cart.indexOf(product),1);
    this.setCart(this.cart)
  }
  clearCart(){
    this.setCart([]);
  }
  getTotalCart(){
    let total=0;
    this.cart=this.getCart();
    this.cart.forEach(element => {
      total=total+(element.qty*element.price);
    });
    return total;
  }

}
