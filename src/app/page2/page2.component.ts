import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  score1:string;

  constructor() { }

  ngOnInit() {
  }
  radioEventHandler(event:any){
    this.score1=event.target.value
  }

}