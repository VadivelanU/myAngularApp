import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '../Modules/common.module';

import { AppComponent } from '../Components/app/app.component';
import { Navigator } from "../Components/Navigator/navigator.component";

@NgModule({
  declarations: [
    AppComponent,
    Navigator
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([], { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
