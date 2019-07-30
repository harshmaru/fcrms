import { LocalStorageService } from 'ngx-webstorage';
import { ImageUploadService } from './image-upload.service';
import { imageUpload } from './../../../config';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const M:any;

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  user:any={};
  titles:any=[];
  JSON=JSON;

  constructor(private imgSvc:ImageUploadService,private localSvc:LocalStorageService,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.user=this.localSvc.retrieve('user');
    this.imgSvc.getAll(this.user.uid).subscribe((data)=>{
      this.titles=data;
      setTimeout(() => {
        M.FormSelect.init(document.querySelectorAll("select"));
      }, 50);
    })
  }

  processFile(image,selected){
    if(image.files.length>0){
      let selectedVal = JSON.parse(selected.value);
      const file: File = image.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {

        let selectedFile = new ImageSnippet(event.target.result, file);
        this.uploadImage(selectedFile.file,selectedVal)

      });

      reader.readAsDataURL(file);
    }
    else{
      M.toast({html: "Please select image"});
    }
  }

  public uploadImage(image: File,selected) {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(`${imageUpload.imageUploadURL}?id=${selected.id}&type=${selected.Type}&uid=${this.user.uid}`, formData).subscribe((data)=>{
      if(data["success"]){
        M.toast({html: data["message"]})
        setTimeout(() => {
          this.router.navigateByUrl("/");
        }, 500);
      }
      else{
        M.toast({html: data["message"]})
      }
    })
  }

}
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}
