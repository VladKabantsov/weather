export class Weather {

    base: string;
    clouds: {
        all: number;
    };
    main: {
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    visibility: number;
    wind: {
        deg: number;
        speed: number;
    };

}
