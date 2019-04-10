import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import {categoriesDetail} from '../models/categories-detail.model'

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent   {
  categories: categoriesDetail[] = [
  new categoriesDetail("Social", "Below are three questions to help self assess your social life ",
      "How often do you get together with friends outside of work?","Do you talk with or visit family members, other than during the holidays?","Do you feel safe and respected in your primary intimate relationship?", 1),
  new categoriesDetail("Work", "Self assessing your work enviroment.",
      "How much autonomy do you have in performing your job?","Do you feel challenged in your job?","Do you feel supported by your managment? ", 2),
  new categoriesDetail("Financial", "Self assessing your finances.",
      "Have you set and achieved your financial goals?","Do you have any debt you need to pay off?","Have you satrted saving?", 3),
  new categoriesDetail("Wellness", "Self assessing Health, Fitness, Mindfulness!",
      "Do you have a nutrition plan?","Do you have any daily work out goals or routines?","Have you created a way to deal with daily stress?", 4),
  ];
}
