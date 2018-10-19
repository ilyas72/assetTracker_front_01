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
  
  ngOnInit() {
  }

  loan() {
    console.log("loan");
  
    this.route.navigate(['/Loan']);

  }

  return() {
    console.log("return"); 

  this.route.navigate(['/Return']);
  

  }

  
}
