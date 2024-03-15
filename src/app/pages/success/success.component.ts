import { Component, OnInit } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit{
  ngOnInit(): void {
    this.order_id=localStorage.getItem('oid')
    this.name= localStorage.getItem('nm')
            
  }
  order_id:any
  name:any
  faCircleCheck=faCircleCheck
}
