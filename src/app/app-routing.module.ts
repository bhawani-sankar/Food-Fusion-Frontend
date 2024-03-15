import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FoodComponent } from './pages/food/food.component';
import { AddressComponent } from './pages/address/address.component';
import { SuccessComponent } from './pages/success/success.component';
import { SearchComponent } from './pages/search/search.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'search',component:SearchComponent},
  {path:'order',component:OrderComponent},
  {path:':name',component:FoodComponent},
  {path:':name/address',component:AddressComponent},
  {path:':name/address/order',component:SuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
