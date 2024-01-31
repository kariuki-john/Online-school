import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/AboutUs/aboutus.component';
import { HomeComponent } from 'src/app/Home/home.component';
import { SolutionsComponent} from './Solutions/Solutions.component';
import { ContactComponent } from './Contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'Solutions',component:SolutionsComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Login',component:LoginComponent,
children:[{path:"Register",component:RegisterComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
