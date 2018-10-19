import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { LoanComponent } from './components/loan/loan.component';
import { ReturnComponent } from './components/return/return.component';
import { RegistrationComponent } from './components/registration/registration.component';

const appRoutes = [
   {
       path: 'Home',
       component: RegistrationComponent,
   },
   {
       path: 'Display',
       component: DisplayComponent,
   },
   
   {
    path: 'Loan',
    component: LoanComponent,
   },

   {
    path: 'Return',
    component: ReturnComponent,
   },

   {
       path: '',
       redirectTo: '/Home',
       pathMatch: 'full'
   },
   {
       path: '**',
       component: RegistrationComponent,
   }
];

@NgModule({
   declarations: [

   ],
   imports: [
     BrowserModule,
     RouterModule.forRoot(appRoutes)
   ],
   exports: [ RouterModule ],
   providers: []
 })
 export class RoutingModule { }