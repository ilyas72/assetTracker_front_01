import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from '../../services/reg.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private route:Router, private mySvc:RegService) { }
  
  //Declare
  userId : number;
  userEmail : string;
  userName : string;


  ngOnInit() {
    this.userId = this.mySvc.userId;
    this.userEmail = this.mySvc.userEmail;
    this.userName = this.mySvc.userName;

  }

  //LoanItem button function --> LoanPage
  loan() {
    console.log("loan");
    
    this.route.navigate(['/Loan']);
  
  }


  deleteMe() {
    console.log("delete me ", this.userId);

    this.mySvc.removeUser(this.userId)
      .subscribe((data: any) => {
        console.log("User %s deleted.", this.userId)
      })
      
    this.route.navigate(['/Registration'])
  }

  // create a new form to update user details and call it
  // saveMyDetails() {
  //   console.log("save me ", this.userId);

  //   this.mySvc.modifyUser(theUserForm.value, this.userId)
  //     .subscribe((data: any) => {
  //       console.log("User %s modified.", this.userId)
  //     })
      
  //   this.route.navigate(['/Registration'])
  // }

  //ReturnItem button --> ReturnPage
  return() {
    console.log("return"); 

  this.route.navigate(['/Return']);

  
  }


}
