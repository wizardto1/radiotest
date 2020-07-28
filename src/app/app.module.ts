import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

const appRoutes: Routes = [
  { path: '', redirectTo : '/page2', pathMatch:'full' },{path:'page1', component: Page1Component, pathMatch:'full' },{path:'page2', component: Page2Component, pathMatch:'full' },{path:'page3', component: Page3Component, pathMatch:'full' },{path:'page4', component: Page4Component, pathMatch:'full' }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes)  ],
  declarations: [ AppComponent, HelloComponent, Page1Component, Page2Component, Page3Component, Page4Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
