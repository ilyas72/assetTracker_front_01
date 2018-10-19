import { Component, OnInit } from '@angular/core';

export interface Item {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})

export class LoanComponent implements OnInit {
  
  items: Item[] = [
    {value: 'item-1', viewValue: 'iPad 01'},
    {value: 'item-2', viewValue: 'iPad 02'},
    {value: 'item-3', viewValue: 'iPad 03'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
