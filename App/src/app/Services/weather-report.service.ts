import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherReportService {
  weatherApiUrl: string = "https://api.openweathermap.org/data/2.5/weather?appid=bfed91d9b05f86c6cdf6e98a790d24d5";
  //apiKey: string = "bfed91d9b05f86c6cdf6e98a790d24d5";
  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string) {
    let apiUrl = this.weatherApiUrl + "&q=" + cityName;
    return this.http.get(apiUrl);
  }
}
