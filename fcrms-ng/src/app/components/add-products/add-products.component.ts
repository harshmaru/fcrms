import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AddProductsService } from './add-products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { isNullOrUndefined } from 'util';
declare const M:any;

@Component({
  selector: 'add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  user;
  process='Add';
  pid=null;
  productsAddEdit=this.fb.group({
    pname:['',Validators.required],
    pdescription:[''],
    price:[null],
    uid:['',Validators.required],
    role:['',Validators.required],
  });

  constructor(private addProdSvc:AddProductsService, private location:Location, private fb:FormBuilder, private localSvc:LocalStorageService,private route:ActivatedRoute) { }

  ngOnInit() {

    let pid = this.route.snapshot.params.pid
    this.user = this.localSvc.retrieve('user');
    this.productsAddEdit.controls.uid.patchValue(parseInt(this.user.uid));
    this.productsAddEdit.controls.role.patchValue(this.user.role);
    if (!isNullOrUndefined(pid)) {
      this.process = "Edit";
      this.pid = pid;
      this.addProdSvc.getOwnedProductByID(pid, this.user.uid).subscribe((product) => {
        if(isNullOrUndefined(product)){
          this.location.back();
        }
        else{
          this.productsAddEdit.patchValue(product);
          M.updateTextFields();
        }
      })
    }
  }

  processProduct(){
    if(this.process==="Add"){
      this.addProdSvc.addOwnedProduct(this.productsAddEdit.value).subscribe((dat) => {
        if (dat['status']) {
          M.toast({ html: 'Product Added Successfully' });
          this.productsAddEdit.reset();
          setTimeout(() => {
            this.location.back();
          }, 500);
        }
        else {
          M.toast({ html: 'Something Went Wrong. Please try again.' })
        }
      })
    }
    if(this.process==="Edit"){
      this.productsAddEdit.value["pid"]=this.pid;
      this.addProdSvc.updateOwnedProduct(this.productsAddEdit.value).subscribe((val)=>{
        if (val["status"]) {
          M.toast({ html: "Product Updated Successfully" });
          this.productsAddEdit.reset();
          setTimeout(() => {
            this.location.back();
          }, 500);
        } else {
          M.toast({ html: "Something Went Wrong. Please try again." });
        }
      })
    }
  }

}
