import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from '../../services/reg.service';

export interface Item {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  constructor(private route:Router, private mySvc:RegService) { }


  userId : number;
  userEmail : string;
  userName : string;
  assetIn : string;

      ngOnInit() {
    this.userId = this.mySvc.userId;
    this.userEmail = this.mySvc.userEmail;
    this.userName = this.mySvc.userName;
    this.assetIn = this.mySvc.assetIn;

  }



  
}
