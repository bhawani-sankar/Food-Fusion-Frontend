import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {
    const food = localStorage.getItem('search')
    if (food) {
      this.foodData.getFoodByName(food).subscribe((result: any) => {
        this.foodDetails = result.result
      })
    }
  }
  constructor(private foodData: UserApiService, private router: Router) { }
  foodDetails: any
  faSearch = faSearch;
  foodUrl(food: any, id: any) {
    localStorage.setItem('fid', id)
    this.router.navigateByUrl(`/${food}`)
  }
  searchFood(food: any) {
    if (food.name !== '') {
      localStorage.setItem('search', food.name)
      this.foodData.getFoodByName(food.name).subscribe((result: any) => {
        this.foodDetails = result.result
        // this.router.navigateByUrl('/search')
      })
    }
    else {
      this.router.navigateByUrl('')
    }
  }
}
