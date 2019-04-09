import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInfoService } from '../user-info.service';

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

  constructor(private userInfoService: UserInfoService) { }

  ngOnInit() {
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

}
