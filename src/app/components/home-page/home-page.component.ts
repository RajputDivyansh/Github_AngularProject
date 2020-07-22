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
	page:number = 1;
	
	constructor(private search:GithubSearchService) { }

	ngOnInit(): void {
		
	}

  	onSubmit() {
		this.page = 1;
		this.search.getSearchUsers(this.title,this.page).subscribe((result:any) => {
			this.userData = result; 
			this.userArray = this.userData.items;
			this.page++;
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

	getUser(name:string) {
		this.search.getUser(name).subscribe((result:any) => {
			this.user = result;
			console.log(this.user);
		})
	}
	
	onScroll() {
		console.log('scrolled!!  '+ this.page);
		this.search.getSearchUsers(this.title,this.page).subscribe((result:any) => {
			// this.userData = result; 
			console.log(this.userArray);
			Array.prototype.push.apply(this.userArray,result.items);
			// this.userArray.push(result.items);
			this.page++;
			console.log(this.userArray);
			console.log(result);
		});
	  }
}

