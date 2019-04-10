import { Component, OnInit, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
