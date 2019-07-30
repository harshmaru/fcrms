import { CartComponent } from './components/cart/cart.component';
import { LogRegComponent } from "./components/log-reg/log-reg.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    // component: LogRegComponent
    loadChildren: "./components/products/products.module#ProductsModule"
  },
  {
    path: "login",
    // component: LogRegComponent
    loadChildren: "./components/log-reg/log-reg.module#LogRegModule"
  },
  {
    path: "products-panel",
    loadChildren:
      "./components/products-panel/products-panel.module#ProductsPanelModule"
  },
  {
    path: "add-products",
    loadChildren:
      "./components/add-products/add-products.module#AddProductsModule"
  },
  {
    path: "add-job-post",
    loadChildren:
      "./components/add-job-post/add-job-post.module#AddJobPostModule"
  },
  {
    path: "bulletin",
    loadChildren: "./components/bulletin/bulletin.module#BulletinModule"
  },
  {
    path: "image-upload",
    loadChildren:
      "./components/image-upload/image-upload.module#ImageUploadModule"
  },
  {
    path: "cart",
    component:CartComponent
  },
  {
    path: "my-orders",
    loadChildren: './components/my-orders/my-orders.module#MyOrdersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
