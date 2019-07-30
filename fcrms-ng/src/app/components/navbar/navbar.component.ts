import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
declare const M : any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  url;
  user = { "uid": "", "fname": "", "lname": "", "email": "", "password": "", "address": null, "role": "" };

  constructor(private router : Router, private localSvc : LocalStorageService, private location : Location,public cartSvc:CartService) { }

  ngOnInit() {
    setTimeout(() => {
      M.Sidenav.init(document.querySelectorAll(".sidenav"),{edge:'right'});
      M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), { hover: true, coverTrigger: false });
      M.Modal.init(document.querySelectorAll('.modal'),{preventScrolling:true,startingTop:'10%',endingTop:'20%'});
    }, 20);
    this.user = this.localSvc.retrieve("user");
    this.localSvc.observe('user').subscribe((val)=>{
      this.user = val;
      if (val === null) {
        this.resetUser();
        this.router.navigateByUrl("/login")
      }
    })
    if (this.user === null) this.resetUser();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }
  logout(){
    this.localSvc.clear("user");
    this.localSvc.store("cart",[])
    this.resetUser();
    this.router.navigateByUrl("/login")
  }
  goBack(){
    this.location.back();
  }
  resetUser(){
    this.user = {
      uid: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      address: null,
      role: ""
    };
  }

}
