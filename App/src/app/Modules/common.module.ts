import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { Home } from "../Components/Home/home.component";
import { NotFound } from "../Components/NotFound/not-found.component";
@NgModule({
  declarations: [Home, NotFound],
  providers: [],
  imports: [
    RouterModule.forChild([
      { path: "home", component: Home },
      { path: "", redirectTo:"home", pathMatch:"full" },
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
export class CommonModule {

}
