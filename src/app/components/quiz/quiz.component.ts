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
  answers:string[]=[]
  result?:string
  results?:{
    A: string
    B: string
  }
  
  ngOnInit(): void {
    this.question=questions[this.questionIndex].question
    this.options=questions[this.questionIndex].options
  }

  handleOptionButton(alias:string){
    if(this.questionIndex+1<questions.length){
      this.answers.push(alias)
      this.questionIndex+=1
      this.question=questions[this.questionIndex].question
      this.options=questions[this.questionIndex].options
    }else{
      this.answers.push(alias)
      this.calculateResult(this.answers)
      this.finish=true
    }
  }

  calculateResult(answers:string[]){
    let countA:number=0, countB:number=0
    answers.map((answer)=>{
      if (answer==="A"){
        countA+=1
      } else {
        countB+=1
      }
    })
    if(countA>=countB){
      this.result=results.A
    }else{
      this.result=results.B
    }
    
  }
}
