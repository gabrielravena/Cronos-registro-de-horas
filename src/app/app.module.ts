import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesingModule } from './login/material-desing/material-desing.module';
import { HeaderComponent } from './header/header.component';
import  { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent
    /*FormFieldExampleComponent*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MaterialDesingModule  /*se agrego el archivo material-desing*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
