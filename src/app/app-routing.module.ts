import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
   path: 'Register',
   component: RegistrationComponent
 },
 {
    path: 'Signin',
    component: SigninComponent
  },
 {
   path: 'Categories',
   component: CategoriesComponent
 },
 {
    path: 'Category-detail',
    component: CategoryDetailComponent
  },
 {
   path: 'Confirmation',
   component: ConfirmationComponent
 },
 {
    path: 'Results',
    component: ResultsComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
