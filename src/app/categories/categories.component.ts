import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
