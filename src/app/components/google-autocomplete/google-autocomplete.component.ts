/// <reference types="@types/googlemaps" />
import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-google-autocomplete',
    templateUrl: './google-autocomplete.component.html',
    styleUrls: ['./google-autocomplete.component.css']
})
export class GoogleAutocompleteComponent implements OnInit {

    @ViewChild('pac_input') searchElement;

    @Output() coordinates: EventEmitter<any> = new EventEmitter<any>();

    public searchBox: google.maps.places.SearchBox;

    public places;

    constructor() {

    }

    ngOnInit() {

        this.searchBox = new google.maps.places.SearchBox((
            this.searchElement.nativeElement
        ));

        this.searchBox.addListener('places_changed', (event) => {

            this.places = this.searchBox.getPlaces();

            if (this.places[0]) {

                this.coordinates.emit({
                    coord:{
                        lat: this.places[0].geometry.location.lat(),
                        lon: this.places[0].geometry.location.lng()
                    },
                    name: this.places[0].name
                });
            }
        });

    }
}

