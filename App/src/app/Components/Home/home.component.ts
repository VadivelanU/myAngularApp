import { Component } from "@angular/core";
import { WeatherReportService } from "../../Services/weather-report.service";
import { ITemperatureDetails, IWeatherDescription } from "../../core/models/weather-data.model";
@Component({
  selector: "home",
  templateUrl: "home.component.html"
})
export class Home {
  weatherData: any;
  temperatureDetails: ITemperatureDetails;
  weatherDescription: IWeatherDescription[];
  constructor(private weatherReportService: WeatherReportService) { }
  getWeather(cityName: string) {
    this.weatherReportService.getWeatherData(cityName).subscribe((data) => {
      if (data) {
        console.log(data);
        this.weatherData = data;
        if (this.weatherData.main) {
          this.temperatureDetails = this.weatherData.main;
        }
        if (this.weatherData.weather) {
          this.weatherDescription = this.weatherData.weather;
        }
      }
    });
  }
}
