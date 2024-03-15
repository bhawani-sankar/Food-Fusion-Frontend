import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  constructor (private router:Router, private foodata:UserApiService){}
  ngOnInit(): void {
    localStorage.setItem('item', '1')
    this.foodata.getFood().subscribe((result:any)=>{
      this.foodDetails =result.result
    })
  }
  faSearch=faSearch;
    foodDetails:any
    getFoodId(id:any){
      localStorage.setItem('fid',id)
    }
    searchFood(food:any){     
     if(food.name !== ''){
      localStorage.setItem('search',food.name)
      this.router.navigateByUrl('/search')
     }
     else{
      this.router.navigateByUrl('')
     }
    }
}
