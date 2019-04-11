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

clickMe() {
  console.log(this.userObject);
  //this will update specific user wellness database
  //need to pass in variable below
  this.userInfoService.updateWellnessData(8);
  this.userInfoService.updateSocialData(5);
  this.userInfoService.updateWorkData(6);
  this.userInfoService.updateFinanceData(2);

  console.log(this.childUserInfo)
  // let length = this.childUserInfo[0].assessment.length - 1
  // console.log(this.childUserInfo[0].assessment[length].social)
}

  
    // console.log(this.childUserInfo[0].assessment.length - 1)
formatDataFin() {
    let length = this.childUserInfo[0].assessment.length - 1
    for (let i = 0; i < this.childUserInfo.length; i ++ )
    if (this.childUserInfo[i].assessment[length].finance >= 8 ) {
      console.log('good')
      return "good-circle"
    } else if (this.childUserInfo[i].assessment[length].finance >= 4 ) {
      console.log('ok')
      return "ok-circle"
    } else {
      console.log('bad')
      return "bad-circle"
    }
}
formatDataSoc() {
  let length = this.childUserInfo[0].assessment.length - 1
  for (let i = 0; i < this.childUserInfo.length; i ++ )
  if (this.childUserInfo[i].assessment[length].social >= 8 ) {
    console.log('good')
    return "good-circle"
  } else if (this.childUserInfo[i].assessment[length].social >= 4 ) {
    console.log('ok')
    return "ok-circle"
  } else {
    console.log('bad')
    return "bad-circle"
  }
}

formatDataWell() {
  let length = this.childUserInfo[0].assessment.length - 1
  for (let i = 0; i < this.childUserInfo.length; i ++ )
  if (this.childUserInfo[i].assessment[length].wellness >= 8 ) {
    console.log('good')
    return "good-circle"
  } else if (this.childUserInfo[i].assessment[length].wellness >= 4 ) {
    console.log('ok')
    return "ok-circle"
  } else {
    console.log('bad')
    return "bad-circle"
  }
}
formatDataWork() {
  let length = this.childUserInfo[0].assessment.length - 1
  for (let i = 0; i < this.childUserInfo.length; i ++ )
  if (this.childUserInfo[i].assessment[length].work >= 8 ) {
    console.log('good')
    return "good-circle"
  } else if (this.childUserInfo[i].assessment[length].work >= 4 ) {
    console.log('ok')
    return "ok-circle"
  } else {
    console.log('bad')
    return "bad-circle"
  }
}












}
