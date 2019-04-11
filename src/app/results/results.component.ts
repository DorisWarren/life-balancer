import { Component, Input, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { AppComponent } from '../app.component'
import { Assessment } from '../models/assessment.model'
import { User } from '../models/user.model'
import { ResultDataService } from '../result-data.service'



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [ResultDataService]
})
export class ResultsComponent implements OnInit {
   childUserInfo: User[];
   userObject;
   userObjectId;
   resultsFromDatabase;

// ngOnInit() {
//   resultsFromDatabase;
//   userObject;
//   userObjectId;

  constructor(private userInfoService: UserInfoService, private resultDataService: ResultDataService) { }

  getResults = () =>
  this.userInfoService.getUserByName().subscribe(res => (this.resultsFromDatabase = res));
  ngOnInit() {
      this.childUserInfo = this.resultDataService.UserList;
    this.getResults();
    if(this.userInfoService.userObject) {
      this.userObject = this.userInfoService.userObject;
      this.userObjectId = this.userInfoService.userObjectId;
      console.log(this.userObject);
      console.log(this.userObjectId);
    } //results of database undefined on OnInit, need to find a way to set userobject properly from registration form
    // console.log(this.userObject);




}


  formatDataFin() {


    if (this.userObject.finance >= 8 ) {
      console.log('good')
      return "good-circle"
    } else if (this.userObject.finance >= 4 ) {
      console.log('ok')
      return "ok-circle"
    } else {
      console.log('bad')
      return "bad-circle"
    }
  }

  formatDataWell() {

    if (this.userObject.wellness >= 8 ) {
      console.log('good')
      return "good-circle"
    } else if (this.userObject.wellness >= 4 ) {
      console.log('ok')
      return "ok-circle"
    } else {
      console.log('bad')
      return "bad-circle"
    }
  }

  formatDataSoc() {

    if (this.userObject.social >= 8 ) {
      console.log('good')
      return "good-circle"
    } else if (this.userObject.social >= 4 ) {
      console.log('ok')
      return "ok-circle"
    } else {
      console.log('bad')
      return "bad-circle"
    }
  }

  formatDataWork() {

    if (this.userObject.work >= 8 ) {
      console.log('good')
      return "good-circle"
    } else if (this.userObject.work >= 4 ) {
      console.log('ok')
      return "ok-circle"
    } else {
      console.log('bad')
      return "bad-circle"
    }
  }








}
