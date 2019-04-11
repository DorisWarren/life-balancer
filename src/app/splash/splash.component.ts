import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { RegistrationComponent} from '../registration/registration.component';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
