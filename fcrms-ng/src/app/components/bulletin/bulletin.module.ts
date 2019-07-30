import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BulletinRoutingModule } from "./bulletin-routing.module";
import { BulletinComponent } from "./bulletin.component";
import { PostService } from "src/app/services/post.service";

@NgModule({
  declarations: [BulletinComponent],
  imports: [CommonModule, BulletinRoutingModule],
  providers: [PostService]
})
export class BulletinModule {}
