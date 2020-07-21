import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GithubSearchService {

  searchAPI:string = "https://api.github.com/search/users?q=";
  userAPI:string = " https://api.github.com/users/"

  constructor(private http:HttpClient) { }

  getSearchUsers(user:string) {
     return this.http.get(this.searchAPI.concat(user));
  }

  getSearchSortUsers(user:string,order:boolean) {
    var orderString:string;
    if(order) {
      orderString = "asc";
    }
    else {
      orderString = "desc";
    }
    return this.http.get(this.searchAPI.concat(user).concat("&sort=score&order=").concat(orderString));
 }

  // getUser(user:string) {
  //   return this.http.get(this.userAPI.concat(user))
  // }
}
