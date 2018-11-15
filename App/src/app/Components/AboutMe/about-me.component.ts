import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  Input
} from "@angular/core";
@Component({
  selector: "about-me",
  templateUrl: "./about-me.component.html"
})
export class AboutMe implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() timeData: string;
  constructor() {
    console.log(new Date() + " constructor " + this.timeData);
  }
  ngOnChanges() {
    console.log(new Date() + " ngOnChanges " + this.timeData);
  }
  ngOnInit() {
    console.log(new Date() + " ngOnInit " + this.timeData);
  }
  ngDoCheck() {
    console.log(new Date() + " ngDoCheck " + this.timeData);
  }
  ngAfterContentInit() {
    console.log(new Date() + " ngAfterContentInit " + this.timeData);
  }
  ngAfterContentChecked() {
    console.log(new Date() + " ngAfterContentChecked " + this.timeData);
  }
  ngAfterViewInit() {
    console.log(new Date() + " ngAfterViewInit " + this.timeData);
  }
  ngAfterViewChecked() {
    console.log(new Date() + " ngAfterViewChecked " + this.timeData);
  }
  ngOnDestroy() {
    console.log(new Date() + " ngOnDestroy " + this.timeData);
  }
}
