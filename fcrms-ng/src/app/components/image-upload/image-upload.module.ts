import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageUploadRoutingModule } from './image-upload-routing.module';
import { ImageUploadComponent } from './image-upload.component';

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [
    CommonModule,
    ImageUploadRoutingModule
  ]
})
export class ImageUploadModule { }
