import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders=[];
  orderIDs=[];

  constructor(private orderSvc:OrderService) { }

  ngOnInit() {
    this.orderSvc.getAllPlacedOrders().subscribe((value)=>{
      this.clubOrderBags(value);
    })
  }
  clubOrderBags(allOrders){
    let clubbed = [];
    let orderIDs=[];
    allOrders.forEach(element => {
      if(!orderIDs.includes("ON# - "+element.oid)){
        clubbed["ON# - "+element.oid]=[];
        orderIDs.push("ON# - "+element.oid);
        clubbed["ON# - "+element.oid]["total"]=0
        clubbed["ON# - "+element.oid]["status"]=element.status;
      }
      clubbed["ON# - "+element.oid].push(element);
      clubbed["ON# - "+element.oid].total=clubbed["ON# - "+element.oid].total+parseInt(element.total);
    });
    this.orders=clubbed;
    this.orderIDs=orderIDs;
  }

}
