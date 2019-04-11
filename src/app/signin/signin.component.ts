import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInfoService } from '../user-info.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  resultsFromDatabase;
  userObject;


  constructor(private userInfoService: UserInfoService, private routes: Router) { }

  ngOnInit() {
    this.getResults();
}

getResults = () =>
  this.userInfoService.getUserByName().subscribe(res => (this.resultsFromDatabase = res));

  onSubmit() {
    // let routes = this.routes;
    let emailInput = this.signInForm.value;
    console.log(emailInput);

    //this will capture the database object matching the email and set it as a property on the service
    for (let i=0; i<this.resultsFromDatabase.length; i++) {
      if(emailInput.email === this.resultsFromDatabase[i].payload.doc.data().email) {
        this.userObject =  this.resultsFromDatabase[i].payload.doc.data();
        this.userInfoService.userObjectId = this.resultsFromDatabase[i].payload.doc.id;
      }
    }
    this.userInfoService.userObject = this.userObject;
    
    //this will route to different pages depending on if the email exists in the database or not
    if (this.userObject) {
      this.routes.navigate(['results']);

    } else {
      this.routes.navigate(['register']);
    }
  }


}
