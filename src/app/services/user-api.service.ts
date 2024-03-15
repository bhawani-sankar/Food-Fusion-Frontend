import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient) { }
  userSignup(data:any){
    return this.http.post("https://backend-zeta-puce.vercel.app/v1/user/register",data)
  }
  userLogin(data:any){
    return this.http.post("https://backend-zeta-puce.vercel.app/v1/user/login",data)
  }
  getUser(){
    const token =sessionStorage.getItem('token')
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get("https://backend-zeta-puce.vercel.app/v1/user",{headers:header})
  }
  getFood(){
    return this.http.get("https://backend-zeta-puce.vercel.app/v1/foods")
  }
  getFoodByID(data:any){
    return this.http.get(`https://backend-zeta-puce.vercel.app/v1/foods/${data}`)
  }
  getPayment(data:any){
    const _data={"price":data}
    return this.http.post("https://backend-zeta-puce.vercel.app/v1/payment",_data)
  }
  getOrder(payload:any){
    return this.http.post("https://backend-zeta-puce.vercel.app/v1/food/order",payload)
  }
  getFoodByName(data:any){
    return this.http.get(`https://backend-zeta-puce.vercel.app/v1/food/byname?q=${data}`)
  }
  getAllOrder(data:any){
      return this.http.get(`https://backend-zeta-puce.vercel.app/v1/food/orders?q=${data}`)
  }
  setAddress(data:any){
      return this.http.post("https://backend-zeta-puce.vercel.app/v1/add/address",data)
  }
  getAddress(data:any){
    return this.http.get(`https://backend-zeta-puce.vercel.app/v1/get/address?q=${data}`)

  }
}
