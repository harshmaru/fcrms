import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddJobPostRoutingModule } from './add-job-post-routing.module';
import { AddJobPostComponent } from './add-job-post.component';
import { PostService } from 'src/app/services/post.service';

@NgModule({
  declarations: [AddJobPostComponent],
  imports: [
    CommonModule,
    AddJobPostRoutingModule,
    ReactiveFormsModule
  ],
  providers:[PostService]
})
export class AddJobPostModule { }
