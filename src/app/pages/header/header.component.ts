import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleUser, faAngleDown, faArrowRightFromBracket, faBell, faUser, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { UserApiService } from 'src/app/services/user-api.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(): void {
    const token = sessionStorage.getItem('token')
    if (token) {
      this.islogin = true
    }
    else {
      this.islogin = false
    }
    if (this.islogin) {
      this.userDetails.getUser().subscribe((result: any) => {
        this.userData = result.result
        localStorage.setItem('uname',result.result.username)
        localStorage.setItem('nm',result.result.name)
      })
    }
  }
  constructor(private router: Router, private userDetails: UserApiService) {

  }
  islogin = false
  userData: any
  faCircleUser = faCircleUser
  faAngleDown = faAngleDown
  faArrowRightFromBracket = faArrowRightFromBracket
  faBell = faBell
  faBoxOpen = faBoxOpen
  faUser = faUser
  logout() {
    this.islogin = false
    sessionStorage.removeItem('token')
    this.router.navigateByUrl('')
  }
  login() {
    this.router.navigateByUrl("login")
  }
  signup() {
    this.router.navigateByUrl("signup")
  }
}
