import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PdetailsComponent } from './product/pdetails/pdetails.component';
import { ProductComponent } from './product/product.component';
import { IndoorComponent } from './sproduct/indoor/indoor.component';
import { OutdoorComponent } from './sproduct/outdoor/outdoor.component';
import { SproductComponent } from './sproduct/sproduct.component';

const routes: Routes = [
  {path:"product", component: ProductComponent},
  {path:"product/:id", component:PdetailsComponent},
  {path:"sproduct", component:SproductComponent,
  children: [{path:"indoor", component: IndoorComponent},
  {path:"outdoor", component: OutdoorComponent}]
},
  {path:"dashboard",component:DashboardComponent},
  {path:'',redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**',component:DashboardComponent}
];
// const croutes: Routes = [
//   {path:"sproduct/indoor", component: IndoorComponent},
//   {path:"sproduct/outdoor", component: OutdoorComponent}
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forChild(croutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
