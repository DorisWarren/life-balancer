import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';
import { category } from '../models/category.model'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent{

    categories: category[] = [
      new category('Social', 'description', 'social.png'),
      new category('Finance', 'description', 'financial.png'),
      new category('Wellness', 'description', 'wellness.png'),
      new category('Work', 'description', 'work.png')

    ];

  }
