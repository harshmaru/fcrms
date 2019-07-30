import { LogRegService } from './log-reg.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
declare const M:any;

@Component({
  selector: "log-reg",
  templateUrl: "./log-reg.component.html",
  styleUrls: ["./log-reg.component.css"]
})
export class LogRegComponent implements OnInit {
  constructor(private lrSvc : LogRegService,private localSvc:LocalStorageService,private router:Router) {}

  ngOnInit() {
    M.Tabs.init(document.querySelectorAll(".tabs"));
    M.FormSelect.init(document.querySelectorAll("select"));
    if(this.localSvc.retrieve("user")){
      this.router.navigateByUrl("/")
    }
  }

  doEmailLogin(...e){
    e[0].preventDefault();
    this.lrSvc.doLogin({email:e[1],password:e[2]}).subscribe((res)=>{
      if(res !== null){
        this.localSvc.store("user",res);
        this.router.navigateByUrl('');
      }
      else{
        M.toast({ html: 'User not found. <br>Please Check Email/Password and try again !!' })
      }
    })
  }

  doEmailRegister(...e){
    e[0].preventDefault();
    if(e[4]===e[5] && e[2]!==""){
      // console.log(e);
      this.lrSvc.doRegister({ fname: e[1], lname: e[2], email: e[3], password: e[4], role : e[6] }).subscribe((res)=>{
        if(res["status"]){
          this.localSvc.store("user", { fname: e[1], lname: e[2], email: e[3], password: e[4], role: e[6] });
          // this.router.navigateByUrl('');
          this.lrSvc.doLogin({email: e[3], password: e[4]}).subscribe((val)=>{
            if(val !== null){
              this.localSvc.store("user",val);
              this.router.navigateByUrl('');
            }
          })
        }else{
          M.toast({ html: 'Something Went Wrong.<br> Please try again.' })
        }
      })
    }
    else{
      M.toast({ html: "Please Check the Details and try again" });
    }
  }

}
