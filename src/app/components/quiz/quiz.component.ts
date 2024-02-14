import { Component, OnInit } from '@angular/core';
import {questions, results, title} from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit{
  questionIndex:number=0
  question?:string
  
  ngOnInit(): void {
    this.question=questions[this.questionIndex].question
  }
}
