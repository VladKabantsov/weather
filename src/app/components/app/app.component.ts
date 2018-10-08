import {ChangeDetectorRef, Component} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../models/weather';
import {City} from '../../models/city';
import {LoadingBarService} from '@ngx-loading-bar/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    protected images = [
        {id: 800, src: 'img/sun.svg'},
        {id: 801, src: 'img/cloudy.svg'},
        {id: 802, src: 'img/cloud.svg'},
        {id: 803, src: 'img/cloudy2.svg'},
        {id: 804, src: 'img/cloudy2.svg'},
        {id: 2, src: 'img/storm.svg'},
        {id: 3, src: 'img/rainy.svg'},
        {id: 5, src: 'img/rainy.svg'},
        {id: 6, src: 'img/snowy.svg'},
        {id: 7, src: 'img/fog.svg'},
    ];

    weather: Weather;

    city: City;

    constructor(
        protected weatherService: WeatherService,
        private ref: ChangeDetectorRef,
        private loadingBar: LoadingBarService,
    ) {

    }

    getWeather(data): void {

        this.startLB();

        this.city = data;

        this.weatherService
            .getByCoord(this.city.coord.lat, this.city.coord.lon)
            .subscribe((weather) => {

                this.weather = weather;

                this.ref.detectChanges();
            });

        this.completeLB();
    }

    round(degrees: number): number {

        return Math.round(degrees);
    }

    img(key: number): string {

        let id: number;

        if (key >= 800 && key <= 804) {

            id = key;
        } else {

            id = Math.round(key / 100);
        }

        const image = this.images.find((el) => {

            return el.id === id;
        });

        return image.src;
    }

    startLB(): void {
        this.loadingBar.start();

        this.ref.detectChanges();
    }

    completeLB(): void {
        this.loadingBar.complete();

        this.ref.detectChanges();
    }
}
