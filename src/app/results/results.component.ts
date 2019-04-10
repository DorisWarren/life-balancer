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

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {
    this.getResults();
    if(this.userInfoService.userObject) {
      this.userObject = this.userInfoService.userObject;
    } //results of database undefined on OnInit, need to find a way to set userobject properly from registration form
    // console.log(this.userObject);

  }

  clickMe() {
    console.log(this.userObject);
  }
  getResults = () =>
    this.userInfoService.getUserByName().subscribe(res => (this.resultsFromDatabase = res));


}
