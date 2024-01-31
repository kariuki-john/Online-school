import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import { HomeComponent } from 'src/app/Home/home.component';
import { AboutUsComponent } from 'src/app/AboutUs/aboutus.component';
import { SolutionsComponent } from './Solutions/Solutions.component';
import { ContactComponent } from './Contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/register.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    SolutionsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
