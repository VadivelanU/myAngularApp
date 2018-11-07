import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AboutMe } from "../Components/AboutMe/about-me.component"
@NgModule({
  declarations: [AboutMe],
  providers: [],
  imports: [
    RouterModule.forChild([{ path: "", component: AboutMe }])
  ]
})
export class AboutMeModule { }
