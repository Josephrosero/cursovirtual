import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { Pag3Component } from './pag3/pag3.component';
import { Pag4Component } from './pag4/pag4.component';
import { Pag5Component } from './pag5/pag5.component';
const appRoutes:Routes = [
  
  
  {path:'', component: Pag1Component},
  {path:'pag1', component: Pag1Component},
  {path:'pag2', component: Pag2Component},
  {path:'pag3', component: Pag3Component},
  {path:'pag4', component: Pag4Component},
  {path:'pag5', component: Pag5Component},
  
];

@NgModule({
  declarations: [
    AppComponent,
    Pag1Component,
    Pag2Component,
    Pag3Component,
    Pag4Component,
    Pag5Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
