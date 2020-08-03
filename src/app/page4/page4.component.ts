import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
score3:number=0;
score4:number=0;
score5:number=0;
flag:any

  constructor() { }

  ngOnInit() {
  }
  radioEventHandler(event:any){
    this.score3=event.target.value
    this.score5=this.score3+this.score4;
  }
  radioEventHandler2(event:any){
    this.score4=event.target.value
    this.score5=this.score3+this.score4;
  }
 ConvertToInt(val){
  return parseInt(val);
}


}