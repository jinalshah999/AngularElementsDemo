import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-democounter',
  templateUrl: './democounter.component.html',
  styleUrls: ['./democounter.component.css']
})
export class DemocounterComponent implements OnInit {
count:number=0;

  constructor() { }

  ngOnInit() {
  }
  onIncrClick(){
   this.count=this.count+1;
  }
  onDecrClick(){
    this.count=this.count-1;
  }

}
