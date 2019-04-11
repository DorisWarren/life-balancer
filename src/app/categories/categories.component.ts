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
      new category('Social', 'description', 'social.png'),
      new category('Finance', 'description', 'financial.png'),
      new category('Wellness', 'description', 'wellness.png'),
      new category('Work', 'description', 'work.png')

    ];
    ngOnInit() {
      this.getResults();

      if(this.userInfoService.userObject) {
        this.userObject = this.userInfoService.userObject;
        // this.userObjectId = this.userInfoService.userObjectId;
      } //results of database undefined on OnInit, need to find a way to set userobject properly from registration form

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
