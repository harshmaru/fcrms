import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : any={};

  constructor(private router:Router,public localSvc:LocalStorageService,private cartSvc:CartService) { }

  ngOnInit() {
    this.cartSvc.initCart();
    if(this.localSvc.retrieve("user")){
      // console.log(this.localSvc.retrieve("user"));
      this.user = this.localSvc.retrieve("user");
    }else{
      this.router.navigateByUrl("login")
    }
  }

}
