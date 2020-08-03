import { Injectable } from '@angular/core';

@Injectable()
export class ScoresService {
  score1='number';
  score2='number';

  setScore1(score){
    this.score1=score;
    console.log(this.score1)
  }
  setScore2(score){
    this.score2=score;
    console.log(this.score2);
  }

  constructor() { }

}