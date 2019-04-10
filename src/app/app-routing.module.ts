import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ResultsComponent } from './results/results.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';





const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
 {
   path: 'register',
   component: RegistrationComponent
 },
 {
    path: 'signin',
    component: SigninComponent
  },
 {
   path: 'categories',
   component: CategoriesComponent
 },
 {
    path: 'category-detail',
    component: CategoryDetailComponent
  },
 {
   path: 'confirmation',
   component: ConfirmationComponent
 },
 {
    path: 'results',
    component: ResultsComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
