import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { UserApiService } from 'src/app/services/user-api.service';
declare var Razorpay: any
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  ngOnInit(): void {
    const storedItem = localStorage.getItem('item');
    this.username= localStorage.getItem('uname')
    if (storedItem !== null) {
      this.item = parseInt(storedItem);
    }
    const storedtotal = localStorage.getItem('total');
    if (storedtotal !== null) {
      this.price = parseInt(storedtotal);
    }
    this.userDetails.getAddress(this.username).subscribe((result:any)=>{
      console.log(result);
      
      this.address=result.result
    })
    if(this.address){
      this.show=false
    }
    else{
      this.show=true
    }
  }
  constructor(private router: Router, private userDetails: UserApiService) { }
  item: any
  price: any
  show:boolean=false
  username:any
  address:any
  userAddress:any
  onItemSelected(item: any){
    if(!this.show){
      this.show=true
    }
    this.userAddress=item 
  }
  continue2(total: any){
    this.continue(this.userAddress,total)   
    
  }
  continue(data: any, total: any) { 
    if (data.name !=='' && data.phone !=='' && data.pincode !=='' && data.locality !=='' && data.address !=='' && data.city !==''
   && data.name !== undefined && data.phone !== undefined && data.pincode !== undefined && data.locality !== undefined && data.address !== undefined && data.city !== undefined ) {
    const obj={ "username" :this.username}
    const payload={...obj,...data}   
      this.userDetails.setAddress(payload).subscribe({
        next:(v)=>{
          console.log(v);
        },
        error:(e)=>{
          console.log(e);
          
        }
      })
      this.userDetails.getPayment(total).subscribe((result: any) => {
        const options = {
          "key": "rzp_test_mBOoFbGDBFNEeR",
          "amount": total,
          "currency": "INR",
          "name": "Food Fusion",
          "description": "Test Transaction",
          "image": "./../../../assets/Images/logo-img.png",
          "order_id": result.order.id,
          "handler": (response: any) => {
            console.log(response);
            const id= localStorage.getItem('fid')
            localStorage.setItem('oid',response.razorpay_order_id)
           const payload = { "order_id" : response.razorpay_order_id,
              "name" : data.name, 
              "username" :this.username, 
              "payment_id" : response.razorpay_payment_id, 
              "product_id" : id, 
              "quantity" : this.item, 
              "phone" :data.phone, 
              "locality" : data.locality, 
              "address" : data.address, 
              "city" : data.city, 
              "state" : data.state, 
              "signature" : response.razorpay_signature
            }
            this.userDetails.getOrder(payload).subscribe((result)=>{
              const path=this.router.url
              this.router.navigateByUrl(`${path}/order`)
            })
          },
          "theme": {
            "color": "#3399cc"
          }
        }
        Razorpay.open(options)

      })
      this.show=false
    }
    else{
      alert("Please fil the address details")
    }
  }
  addUserAddress(){
    this.show=false
  }
}
