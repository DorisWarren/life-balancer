import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';
import { UserInfoService } from '../user-info.service';
import { category } from '../models/category.model'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent{

  resultsFromDatabase
  userObject;

    constructor(private userInfoService: UserInfoService, private routes: Router) { }

    categories: category[] = [
      new category('Social', 'description', 'social.png'),
      new category('Finance', 'description', 'financial.png'),
      new category('Wellness', 'description', 'wellness.png'),
      new category('Work', 'description', 'work.png')

    ];
    ngOnInit() {
      this.getResults();
      if(this.userInfoService.userObject) {
        this.userObject = this.userInfoService.userObject;
      } //results of database undefined on OnInit, need to find a way to set userobject properly from registration form
      // console.log(this.userObject);
  }

  getResults = () =>
    this.userInfoService.getUserByName().subscribe(res => (this.resultsFromDatabase = res));
}
