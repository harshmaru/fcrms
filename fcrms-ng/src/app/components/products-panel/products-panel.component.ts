import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ProductsPanelService } from './products-panel.service';
declare const M:any;

@Component({
  selector: 'products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {

  user: any;
  products: any[]=[];

  constructor(private router: Router, public localSvc: LocalStorageService, private ppSvc : ProductsPanelService) { }

  ngOnInit() {
    if (this.localSvc.retrieve("user")) {
      // console.log(this.localSvc.retrieve("user"));
      this.user = this.localSvc.retrieve("user");
      if(this.user.role === 'customer') this.router.navigateByUrl('/')
    } else {
      this.router.navigateByUrl("login")
    }
    this.getOwnProductsByUID()
  }
  getOwnProductsByUID(){
    this.ppSvc.getProductsBasedOnUID(this.user.uid).subscribe((val:any[])=>{
      this.products = val;
    })
  }
  deleteProduct(pid) {
    this.ppSvc.deleteOwnedProduct(pid).subscribe((val)=>{
      if(val['status']){
        M.toast({ html: 'Product Deleted Successfully.' })
        for(let i=0;i<this.products.length;i++)
        {
          if(this.products[i].pid===pid){
            this.products.splice(i,1);
          }
        }
      }
    })
  }
}
