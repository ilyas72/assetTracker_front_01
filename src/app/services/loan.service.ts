import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  userId: number;
  userName: string;
  userEmail: string;
  assetIn: string;


  constructor(private http: HttpClient) { }

  getUser(userId): Observable<any> {
    return this.http.get(`/user/${userId}`);
  }
  
  getAssets(assetIn): Observable<any> {
    return this.http.get(`/asset/${assetIn}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`/users`);
  }

  // addUser(user: any): Observable<any> {
  //   console.log(">>>" + user);
  //   return this.http.post<any>("http://localhost:3000/user_reg", user);
  // }

  selectUser(myUser: any) {

    this.userId = myUser.user_id;
    console.log ("svc user =>", this.userId);

    this.assetIn = myUser.asset_status;
    console.log ("svc asset =>", this.assetIn);

    this.userName = myUser.name;
    console.log ("svc user =>", this.userName);

    this.userEmail = myUser.email;
    console.log ("svc user =>", this.userEmail);
  }


}
  
