import { Injectable } from '@angular/core';

@Injectable()
export class ScoresService {
  score1='number';
  score2='number';
  total;
  button1:boolean;
  button2:boolean;

  setScore1(score){
    this.score1=score;
    console.log(this.score1)
  }
  setScore2(score){
    this.score2=score;
    console.log(this.score2);
  }
  setButton1(button){
    this.button1=button
  }
  getButton1(){
    return this.button1
  }
  setButton2(button){
    this.button2=button
  }
  getButton2(){
    return this.button2
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