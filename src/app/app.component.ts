import { Component } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	map: any;

	ngAfterViewInit(){
		const loader = new Loader({
			apiKey: environment.maps_api_key,
			version: 'weekly'
		});

		loader.load().then(() => {
			this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
				center: {lat : -34.415, lng: 151},
				zoom: 8
			});
		});
	}


}
