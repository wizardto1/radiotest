import { Injectable } from '@angular/core';

@Injectable()
export class ScoresService {
  score1='number';
  score2='number';
  total;

  setScore1(score){
    this.score1=score;
    console.log(this.score1)
  }
  setScore2(score){
    this.score2=score;
    console.log(this.score2);
  }
  getScore1(){

    return this.score1
  }
  getScore2(){console.log(this.score2);
  return this.score2}
  getTotal(){
    this.total=parseInt(this.score1)+parseInt(this.score2); 
  return this.total;

  }

  constructor() { }

}