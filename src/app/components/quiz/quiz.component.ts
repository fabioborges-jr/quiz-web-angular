import { Component, OnInit } from '@angular/core';
import {questions, results} from "../../../assets/data/quizz_questions.json"
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'quiz',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit{
  questionIndex:number=0
  question?:string
  options?:{
    id: number
    name: string
    alias: string
  }[]
  finish:boolean=false
  
  ngOnInit(): void {
    this.question=questions[this.questionIndex].question
    this.options=questions[this.questionIndex].options
  }

  handleOptionButton(){
    if(this.questionIndex+1<questions.length){
      this.questionIndex+=1
      this.question=questions[this.questionIndex].question
      this.options=questions[this.questionIndex].options
    }else{
      this.finish=true
    }
  }
}
