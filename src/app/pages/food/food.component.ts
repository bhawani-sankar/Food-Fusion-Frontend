import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  ngOnInit(): void {
    const id= localStorage.getItem('fid')
    console.log(id);
    
    if(id){
      this.foodData.getFoodByID(id).subscribe((result:any)=>{
        console.log(result);
        
        this.food=result.result
        this.tprice=result.result.price
        this.total= this.item * this.tprice
        localStorage.setItem('total',this.total.toString())
      })
    }
    const storedItem = localStorage.getItem('item');
    if (storedItem !== null) {
      this.item = parseInt(storedItem);
    } 
    const token=sessionStorage.getItem('token')
    if(token){
      this.islogin=true
    }else{
      this.islogin=false
    }
  }
  constructor(private router:Router,private foodData:UserApiService) { }
  islogin:boolean=false
  faPlus = faPlus
  faMinus = faMinus
  item = 1
  food:any
  tprice:any
  total:number=0
  minus() {
    if (this.item > 1) {
      this.item -= 1
      localStorage.setItem('item', this.item.toString())
      this.total= this.item * this.tprice
      localStorage.setItem('total',this.total.toString())
    }
  }
  plus() {
    if (this.item < 20) {
      this.item += 1
      localStorage.setItem('item', this.item.toString())
      this.total= this.item * this.tprice
      localStorage.setItem('total',this.total.toString())
    }
  }
  buy(){
    console.log(this.islogin);
    
    if(this.islogin){
      const path=this.router.url   
      
      this.router.navigateByUrl(`${path.split('/')[1]}/address`)
    }else{
      this.router.navigateByUrl('/login')
    }
  }
}
