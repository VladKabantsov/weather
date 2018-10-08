import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {GoogleAutocompleteComponent} from './components/google-autocomplete/google-autocomplete.component';
import {WeatherService} from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@NgModule({
    declarations: [
        AppComponent,
        GoogleAutocompleteComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        LoadingBarModule.forRoot(),
    ],
    providers: [
        WeatherService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
