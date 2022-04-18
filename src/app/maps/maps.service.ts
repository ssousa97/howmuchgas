import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Loader } from '@googlemaps/js-api-loader';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class MapsService {

	private map!: google.maps.Map;
	private directionsService!: google.maps.DirectionsService;
	private directionsRenderer!: google.maps.DirectionsRenderer;

	private mapSubject: BehaviorSubject<boolean>;


	constructor() { 

		this.mapSubject = new BehaviorSubject<boolean>(false);
	}

	loadMap(mapElement: HTMLElement){

		const loader = new Loader({
			apiKey: environment.maps_api_key,
			libraries : ['places'],
			version: 'weekly'
		});

		loader.load().then(()=> {
			this.map = new google.maps.Map(mapElement, {
				center: {lat: -22.908333, lng : -43.196388},
				zoom: 13
			});

			
			this.directionsService = new google.maps.DirectionsService();
			this.directionsRenderer = new google.maps.DirectionsRenderer();

			this.directionsRenderer.setMap(this.map);

			this.mapSubject.next(true);
		});

	}

	setDirections(origin: string, destination: string){
		const request = {
			origin: origin,
			destination: destination,
			travelMode: google.maps.TravelMode.DRIVING
		}

		this.directionsService.route(request, (result, status)=>{
			if (status == 'OK'){
				this.directionsRenderer.setDirections(result);
			}
		});
	}

	isMapLoaded(){
		return this.mapSubject.asObservable();
	}

	getMap(){
		return this.map;
	}

}


