import {Component} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../models/weather';
import {City} from '../../models/city';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    weather: Weather;

    city: City;

    constructor(
        protected weatherService: WeatherService,
    ) {

    }

    getWeather(data): void {

        console.log(data);
        this.city = data;

        this.weatherService
            .getByCoord(this.city.coord.lat, this.city.coord.lon)
            .subscribe((weather) => {

                this.weather = weather.main;
            });
    }
}
