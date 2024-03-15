import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  ngOnInit(): void {
    
  }
    constructor(private router:Router,private userDetails:UserApiService){}
    login(){
      this.router.navigateByUrl('login')
    }
    createUser(data:any){
      if(data.name !== '' || data.email !== '' || data.username !== '' || data.password !== ''){
        this.userDetails.userSignup(data).subscribe((result)=>{
          this.router.navigateByUrl('/login')
        })
      }
      else{
        alert("Please fiil all the details")
      }
    }
}
