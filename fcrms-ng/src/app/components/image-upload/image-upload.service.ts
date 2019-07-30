import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { imageUpload } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http:HttpClient) { }

  getAll(uid){
    return this.http.get(imageUpload.getAllForImageUpload+`?id=${uid}`)
  }

}
