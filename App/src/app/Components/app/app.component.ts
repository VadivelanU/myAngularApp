import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateInfo: string;
  ngOnInit() {
    //Set Interval Executes the specified function continuously after specified amount of time.
    setInterval(() => {this.getDateTime()}, 500);
  }
  getDateTime() {
    var date: Date = new Date();
    this.dateInfo = "Current Time : " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " TimeZone-Offset: " + date.getTimezoneOffset() / 60;
    //Set timeout Executes the specified function after specified amount of time.
    //setTimeout(this.getDateTime(), 500);
  }
}
