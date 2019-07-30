import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { PostService } from 'src/app/services/post.service';
declare const M: any;

@Component({
  selector: "add-job-post",
  templateUrl: "./add-job-post.component.html",
  styleUrls: ["./add-job-post.component.css"]
})
export class AddJobPostComponent implements OnInit {
  operation;
  user;
  postAddEdit = this.fb.group({
    post_title: ["", Validators.required],
    post_type: ["", Validators.required],
    post_description: [""]
  });

  constructor(private fb: FormBuilder, private postSvc: PostService, private localSvc: LocalStorageService, private location: Location) { }

  ngOnInit() {
    M.FormSelect.init(document.querySelectorAll("select"));
  }

  processPost() {
    // console.log(this.postAddEdit);
    if (this.postAddEdit.valid) {
      this.postAddEdit.value["posted_by"] = parseInt(this.localSvc.retrieve("user")['uid']);
      this.postSvc.addNewPost(this.postAddEdit.value).subscribe((data) => {
        // console.log(data);
        if (data['status']) {
          M.toast({ html: 'Post Added Successfully' });
          this.postAddEdit.reset();
          setTimeout(() => {
            this.location.back();
          }, 500);
        }
        else {
          M.toast({ html: 'Something Went Wrong. Please try again.' })
        }
      })
    }
  }

}
