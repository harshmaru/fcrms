import { LogRegRoutingModule } from "./log-reg-routing.module";
import { LogRegComponent } from "./log-reg.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [CommonModule, LogRegRoutingModule, HttpClientModule],
  declarations: [LogRegComponent]
})
export class LogRegModule {}
