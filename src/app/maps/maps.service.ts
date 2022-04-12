import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class MapsService {


	map: any;

	constructor() { }

	loadMap(mapElement: HTMLElement) {

		const loader = new Loader({
			apiKey: environment.maps_api_key,
			version: 'weekly'
		});

		loader.load().then(()=> {
			this.map = new google.maps.Map(mapElement, {
				center: {lat: -22.908333, lng : -43.196388},
				zoom: 13
			});
		});
	}
}
