import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import {title} from "../assets/data/quizz_questions.json"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title?:string;

  ngOnInit(): void {
    this.title=title
  }
}
