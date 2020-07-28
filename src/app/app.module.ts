import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Page1Component } from './page1/page1.component';

const appRoutes: Routes = [
  { path: '', redirectTo : '/page1', pathMatch:'full' },{path:'page1', component: Page1Component }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes)  ],
  declarations: [ AppComponent, HelloComponent, Page1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
