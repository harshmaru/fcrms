import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private localSvc:LocalStorageService, private router:Router){}

  ngOnInit(){
    if(!(this.localSvc.retrieve("user")||this.localSvc.retrieve("cart")))
    {
      this.router.navigateByUrl("/login");
    }
  }
}
