import { Posts } from 'src/config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class PostService {
    constructor(private http: HttpClient) { }

    addNewPost(post:any){
        return this.http.post(Posts.addPostsURL,post);
    }
    getAllPosts(){
        return this.http.get(Posts.getAllPostsURL);
    }

}
