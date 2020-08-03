import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  score2:number;
  flag1:any;

  constructor() {this.flag1=0 }

  ngOnInit() {
  }
  radioEventHandler(event:any){
    this.score2=event.target.value
  }

}