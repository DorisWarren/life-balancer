import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  resultsFromDatabase;
  userObject;
  userObjectId;

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {
    this.getResults();
    if(this.userInfoService.userObject) {
      this.userObject = this.userInfoService.userObject;
      this.userObjectId = this.userInfoService.userObjectId;
    } //results of database undefined on OnInit, need to find a way to set userobject properly from registration form
    // console.log(this.userObject);

  }

  clickMe() {
    console.log(this.userObject);
    //this will update specific user wellness database
    //need to pass in variable below
    this.userInfoService.updateWellnessData(5);

  }
  getResults = () =>
    this.userInfoService.getUserByName().subscribe(res => (this.resultsFromDatabase = res));


}
