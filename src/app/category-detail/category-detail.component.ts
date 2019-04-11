import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import {categoriesDetail} from '../models/categories-detail.model'
import {category} from '../models/category.model'
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent   {

  constructor(private userInfoService: UserInfoService, private routes: Router) { }


  categories: categoriesDetail[] = [
  new categoriesDetail(new category("Social", "Below are three questions to help self assess", './assets/images/social.png'),
      "How often do you get together with friends outside of work?","Do you talk with or visit family members, other than during the holidays?","Do you feel safe and respected in your primary intimate relationship?", 1),
  new categoriesDetail(new category("Work", "Below are three questions to help self assess", './assets/images/work.png'),
      "How much autonomy do you have in performing your job?","Do you feel challenged in your job?","Do you feel supported by your managment? ", 2),
  new categoriesDetail(new category('Financial', "Below are three questions to help self assess", './assets/images/financial.png'),
      "Have you set and achieved your financial goals?","Do you have any debt you need to pay off?","Have you started saving?", 3),
  new categoriesDetail(new category("Wellness", "Below are three questions to help self assess ", './assets/images/wellness.png'),
      "Do you have a nutrition plan?","Do you have any daily work out goals or routines?","Have you created a way to deal with daily stress?", 4),
  ];



    onSubmit() {


      // let data = this.sliderName.value; // get slider data - repeat for each slider
      //
      // this.userInfoService.updateWellnessData(data)
      //     .then(res => {
      //       this.sliderName.reset();
      //
      //     });
          //userObject doesnt contain firebase metadeta as its created and set locally here
      // this.userInfoService.userObject = data;

      this.routes.navigate(['/results']);
    }
}
