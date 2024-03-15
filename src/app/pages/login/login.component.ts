import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private router: Router, private userdetails: UserApiService) { }

  loginUser(data: any) {
    if (data.username !== '' || data.password !== '') {
            this.userdetails.userLogin(data).subscribe({
              next: (v: any) => {
                sessionStorage.setItem('token', v.token);
                this.router.navigateByUrl('');
              },
              error: (e) => {
                 alert("Unauthorized: Please enter correct username and password."); },
            })
          }else{
            alert("Please eanter username and passward")
          } 
    }

  }
