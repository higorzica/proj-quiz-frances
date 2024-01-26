import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizz_questions from '../../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-herois',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './herois.component.html',
  styleUrl: './herois.component.css'
})

export class HeroisComponent implements OnInit {

  title:string = ""
  @Input() categoria: string = '';

  questions:any
  questionsSelected:any

  categorias:string[] = []

  answers:string[] = []
  answersSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  constructor() {}

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title
      this.questions = quizz_questions.questions
      this.questionsSelected = this.questions[this.questionIndex]
      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
      // console.log(this.questions)

    }

  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nexStep()

  }

  async nexStep(){
    this.questionIndex+=1
    if(this.questionMaxIndex > this.questionIndex){
      this.questionsSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true
      this.answersSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results];

    }
  }

  async checkResult(answers:string[]){
    const result = answers.reduce((previous, current, i, arr) => {
      if(arr.filter(item => item === previous).length > arr.filter(item => item === current).length ) {
        return previous
      }else {
        return current
      }
    })
    return result
  }

  reinitialized(){
    window.location.href = "/"
  }

}
