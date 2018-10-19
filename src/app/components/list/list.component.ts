import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from '../../services/reg.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
myList:any[] = [];
minDate = new Date(1950, 0, 1);
maxDate = new Date(2000, 0, 1);
constructor(private route:Router, private mySvc:RegService) { }
  ngOnInit() {
  }

  processForm(theForm:NgForm) {
    console.log(theForm.value);
    this.myList.push(theForm.value);
    
    this.mySvc.addUser(theForm.value)
     .subscribe((result:any)=>{
       console.log(result);
     });
    this.route.navigate(['/Display']);
  }

}
