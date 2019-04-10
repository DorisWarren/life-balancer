import { Component, Input,  OnInit, } from '@angular/core';
import { AppComponent } from '../app.component'
import { Assessment } from '../models/assessment.model'
import { User } from '../models/user.model'



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() childUserInfo: User[];

  ngOnInit() {
    // console.log(this.childUserInfo)
    // let length = this.childUserInfo[0].assessment.length - 1
    // console.log(this.childUserInfo[0].assessment[length].social)
  }

  formatData(childUserInfo) {
    let length = this.childUserInfo[0].assessment.length - 1
    for (let i = 0; i > this.childUserInfo.length; i ++ )
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


}
