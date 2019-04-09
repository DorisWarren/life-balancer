import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    //event emiiter or update database here
    console.log(this.registrationForm.value);
    this.registrationForm.reset();

  }

}
