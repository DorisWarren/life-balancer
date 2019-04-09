import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SplashComponent } from './splash/splash.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ResultsComponent } from './results/results.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ResultsComponent,
    ConfirmationComponent,
    RegistrationComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
