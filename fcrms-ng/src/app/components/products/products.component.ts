import { isNullOrUndefined } from 'util';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { LocalStorageService } from 'ngx-webstorage';
import { API_URL } from 'src/config';
declare const M:any;

@Component({
  selector: "products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  user;
  products: any[] = [];
  M:any;
  allProducts: any[] = [];

  constructor(
    private prodSvc: ProductsService,
    private localSvc: LocalStorageService,
    public cartSvc: CartService
  ) {}

  ngOnInit() {

    this.M=M;
    this.user = this.localSvc.retrieve("user");
    this.prodSvc
      .getAllProductsBasedOnCategory(this.user.role)
      .subscribe((val: any[]) => {
        this.products = val;
        this.allProducts= val;
        M.Dropdown.init(document.querySelectorAll('#dropdown-trigger'),{coverTrigger : false});
      });
  }
  checkURL(product){
    if(isNullOrUndefined(product.pimg))
    {
      return "https://es.toppng.com/public/uploads/preview/palm-trees-silhouette-11546982460wjtrh9s9ds.png";
    }
    else{
      return API_URL+product.pimg;
    }
  }
  searchKeyword(keyword){
    this.products=[]
    this.allProducts.forEach(element => {
      if(element.pname.toLowerCase().includes(keyword) || element.pdescription.toLowerCase().includes(keyword)){
        this.products.push(element);
      }
    });
  }
  sortFilter(type){
    if(type==='featured')
      this.products = this.allProducts;
    else if(type === 'htol'){
      this.products.sort((obj1,obj2)=>{
        return obj2.price - obj1.price;
      })
    }
    else if(type === 'ltoh'){
      this.products.sort((obj1,obj2)=>{
        return obj1.price - obj2.price;
      })
    }
  }
}
