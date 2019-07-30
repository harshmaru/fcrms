import { isNullOrUndefined, isNull } from 'util';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ProfileAddress } from 'src/config';
declare const M:any;

@Component({
  selector: 'add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  process='Add';
  user={}
  @ViewChild("address") addressTxt

  constructor(private http:HttpClient,private localSvc:LocalStorageService) { }

  ngOnInit() {
    this.user = this.localSvc.retrieve("user");
    M.CharacterCounter.init(document.querySelector('#textarea2'));
    if(!isNullOrUndefined(this.user["address"])){
      this.process = "Edit";
      this.addressTxt.nativeElement.value=this.user["address"]
      M.updateTextFields();
      // console.log(this.addressTxt,this.user)
    }
  }

  addAddress(address){
    if((address!=="")&&(!isNullOrUndefined(address))){
      this.http.post(ProfileAddress.addAddressURL,{address:address,email:this.localSvc.retrieve("user")["email"]}).subscribe((val)=>{
        if(val["status"]){
          let user = this.localSvc.retrieve("user");
          user.address=address;
          this.localSvc.store("user",user);
          M.toast({ html: 'Address '+this.process+'ed'+' successfully' })
          let instance = M.Modal.getInstance(document.querySelector('.modal#address-modal'))
          instance.close()
        }
        else{
          M.toast({ html: 'Some error occured !!' })
        }
      })
    }
    else{
      M.toast({ html: 'Please enter Valid Address' })
    }

    // console.log(ProfileAddress.addAddressURL, { address: address, email: this.localSvc.retrieve("user")["email"] })
  }

}
