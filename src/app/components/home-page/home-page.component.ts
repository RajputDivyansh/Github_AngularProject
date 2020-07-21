import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../../services/github-search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title:string;
  userData:any;
  user:any;
  userArray:any[];
  initialSort:boolean = true;
  
  constructor(private search:GithubSearchService) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
		this.search.getSearchUsers(this.title).subscribe((result:any) => {
			this.userData = result; 
			this.userArray = this.userData.items;
			console.log(this.userData);
		});
	}

sort() {
	this.search.getSearchSortUsers(this.title,this.initialSort).subscribe((result:any) => {
		this.userData = result; 
		this.userArray = this.userData.items;
		// console.log(this.userData);
		this.initialSort = !this.initialSort;
	});
}


	// onSubmit() {
	// 	this.search.getUser(this.title).subscribe((result:any) => {
	// 		this.user = result;
	// 	});
	// }
}

