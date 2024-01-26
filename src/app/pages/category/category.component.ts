import { Component, OnInit } from '@angular/core';
import quizz_categories from '../../../assets/data/quizz_categories.json'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categoria: string = ''
  categories:any
  categorySelected:any

  constructor() {}

  ngOnInit(): void {
    this.categories = quizz_categories.categories
  }

  playerChooseCategory(value:string){
    // console.log(value)
    this.categorySelected = value
    this.categoria = this.categorySelected
  }

}
