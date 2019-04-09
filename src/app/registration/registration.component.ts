import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInfoService } from '../user-info.service';
import { Routes, RouterModule } from '@angular/router';
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
    satisfaction: new FormControl('5'),
  });

  resultsFromDatabase;

  constructor(private userInfoService: UserInfoService) { }

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

  }

  showUsersInDatabase() {
    // this.resultsFromDatabase = this.userInfoService.getUserByName();
    console.log(this.resultsFromDatabase);
  }

  getResults = () =>
    this.userInfoService.getUserByName().subscribe(res => (this.resultsFromDatabase = res));

}
