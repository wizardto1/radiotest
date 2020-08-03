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

  constructor(private scoresService: ScoresService) {this.flag1=0}
  setScore1(flag1){
    this.scoresService.setScore1(flag1)
  }

  ngOnInit() {
  }
  radioEventHandler(event:any){
    this.score2=event.target.value
  }

}