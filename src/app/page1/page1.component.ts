import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  score2:number;
  flag1:any;
  buttonDisabled:boolean=false;

  constructor(private scoresService: ScoresService) {}
  setScore1(flag1){
    this.scoresService.setScore1(flag1)
    this.scoresService.setButton2(this.buttonDisabled)
  }

  ngOnInit() {
    console.log(this.flag1)
    this.flag1=this.scoresService.getScore1()
    this.buttonDisabled=this.scoresService.getButton2()
  }
  radioEventHandler(event:any){
    this.score2=event.target.value
     this.buttonDisabled=true;
  }

}