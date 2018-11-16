import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { Home } from "../Components/Home/home.component";
import { NotFound } from "../Components/NotFound/not-found.component";
import { WeatherReportService } from "../Services/weather-report.service";
@NgModule({
  declarations: [Home, NotFound],
  providers: [
    WeatherReportService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "home", component: Home },
      //{ path: "", component: Home },
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "aboutMe",
        loadChildren: "./about-me.module#AboutMeModule"
      },
      {
        path: "**", component: NotFound
      }
    ])
  ]
})
export class AppCommonModule {
}
