import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInfoService } from '../user-info.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    satisfaction: new FormControl('5'),
  });

  resultsFromDatabase;

  constructor(private userInfoService: UserInfoService, private routes: Router) { }

  ngOnInit() {
    this.getResults();
  }

  onSubmit() {
    //event emiiter or update database here
    console.log(this.registrationForm.value);
    let data = this.registrationForm.value;

    this.userInfoService.createNewUser(data)
        .then(res => {
          this.registrationForm.reset();

        });

    this.userInfoService.userObject = data;
    this.routes.navigate(['categories']);
  }

// temporary button to experiment with getting user by name from database
  showUsersInDatabase() {
    // this.resultsFromDatabase = this.userInfoService.getUserByName();
    console.log(this.resultsFromDatabase);
  }

  getResults = () =>
    this.userInfoService.getUserByName().subscribe(res => (this.resultsFromDatabase = res));

    getUserInDatabase() {
      console.log('placeholder');
    }
}
