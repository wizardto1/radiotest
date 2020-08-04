import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service'; 

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  page1;
  page2;
  total;
  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.page1=this.scoresService.getScore1();
    this.page2=this.scoresService.getScore2();
    this.total=this.scoresService.getTotal();
  }

}