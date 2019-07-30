import { isNullOrUndefined } from 'util';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { API_URL } from 'src/config';
declare const M:any;

@Component({
  selector: 'bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {

  posts:any[]=[{
    post_title : '',
    post_description: ''
  }];
  selected_post=0;

  constructor(private postSvc : PostService) { }

  ngOnInit() {
    M.Modal.init(document.querySelectorAll(".modal"));
    this.postSvc.getAllPosts().subscribe((data:any)=>{
      // console.log(data);
      this.posts = data;
    })
  }

  checkURL(posts){
    if(isNullOrUndefined(posts.post_img))
    {
      return "https://picsum.photos/200/250?image=998";
    }
    else{
      return API_URL+posts.post_img;
    }
  }

}
