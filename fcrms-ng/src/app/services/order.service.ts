import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdersURL } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient, private localSvc : LocalStorageService) { }

  addOrder(val){
    return this.http.post(OrdersURL.addOrdersURL,val);
  }
  getAllPlacedOrders(){
    let user = this.localSvc.retrieve('user');
    return this.http.post(OrdersURL.getAllPlacedOrdersURL,{uid:user.uid});
  }

}
