import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  ngOnInit(): void {
    const name=localStorage.getItem('uname')
    this.foodDetails.getAllOrder(name).subscribe((order:any)=>{
      console.log(order);
      
      this.orderDetails=order.result
    })
  }
  constructor(private foodDetails:UserApiService){ }
orderDetails:any

}
