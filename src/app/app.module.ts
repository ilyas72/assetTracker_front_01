import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DisplayComponent } from './components/display/display.component';
import { RoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { LoanComponent } from './components/loan/loan.component';
import { ReturnComponent } from './components/return/return.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    // ReactiveFormsModule,
    RegistrationComponent,
    DisplayComponent,
    LoanComponent,
    ReturnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MaterialModule,
    FormsModule,
    MatMomentDateModule,
    RoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

