import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    protected headersObj = {};

    protected apiKey = '53b227864accbbc4ba6d60a2d1075405';

    protected _endpoint = 'https://api.openweathermap.org/data/2.5/weather?';

    protected errors;

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

    getByPlace(place: string): Observable<any> {

        return this.http
            .get<any>(this.endPoint + 'q=' + place + this.key)
            .pipe(
                // catchError()
            );
    }

    getByCoord(lat: number, lon: number) {

        return this.http
            .get<any>(this.endPoint + 'lat=' + lat + '&lon=' + lon + this.key)
            .pipe(
                // catchError()
                // catchError(this.handleError('getHeroes', []))
            );
    }
}
