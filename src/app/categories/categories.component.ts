import { Component, OnInit, DoCheck } from '@angular/core';
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
  userObjectId;

    constructor(private userInfoService: UserInfoService, private routes: Router) {

     }

    categories: category[] = [
      new category('Social', 'Evaluating the quality of your social life.', 'social.png'),
      new category('Finance', 'Evaluating your financial health.', 'financial.png'),
      new category('Wellness', 'Evaluating your wellness. Health | Fitness | Mindfulness ', 'wellness.png'),
      new category('Work', 'Evaluating your work life.', 'work.png')

    ];
    ngOnInit() {
      this.getResults();

      if(this.userInfoService.userObject) {
        this.userObject = this.userInfoService.userObject;
      }

  }

    ngDoCheck() {
      this.userObject = this.userInfoService.userObject;

      for (let i=0; i<this.resultsFromDatabase.length; i++) {
        if(this.userObject.email === this.resultsFromDatabase[i].payload.doc.data().email) {
          this.userObject =  this.resultsFromDatabase[i].payload.doc.data();
          this.userObjectId = this.resultsFromDatabase[i].payload.doc.id;
        }
      }
      this.userInfoService.userObject = this.userObject;
      this.userInfoService.userObjectId = this.userObjectId;

    }


  getResults = () =>
    this.userInfoService.getUserByName().subscribe(res => (this.resultsFromDatabase = res));
}
