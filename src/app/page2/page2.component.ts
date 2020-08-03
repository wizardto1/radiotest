import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service'; 
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  score1:number;
  flag:any;

  constructor(private scoresService: ScoresService) { this.flag = 0; }
  setScore2(flag){
    this.scoresService.setScore2(flag)
  }


  ngOnInit() {
  }
  radioEventHandler(event:any){
    this.score1=event.target.value
  }

}