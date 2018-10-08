import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    protected apiKey = '53b227864accbbc4ba6d60a2d1075405';

    protected _endpoint = 'https://api.openweathermap.org/data/2.5/weather?';

    protected _units = 'metric';

    constructor(protected http: HttpClient) {
    }

    get key(): string {
        return '&APPID=' + this.apiKey;
    }

    get endPoint(): string {
        return this._endpoint;
    }

    set endPoint(url: string) {
        this._endpoint = url;
    }

    get units(): string {
        return '&units=' + this._units;
    }

    getByPlace(place: string): Observable<any> {

        return this.http
            .get<any>(this.endPoint + 'q=' + place + this.units + this.key);
    }

    getByCoord(lat: number, lon: number) {

        return this.http
            .get<any>(this.endPoint + 'lat=' + lat + '&lon=' + lon + this.units + this.key);
    }
}
