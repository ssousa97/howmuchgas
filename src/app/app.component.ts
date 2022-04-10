import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


	private map: any;

	ngAfterViewInit() {

		const loader = new Loader({
			apiKey: 'AIzaSyCn7dSI36-AtAlblWo781JKR1TZxefnBkA',
			version: 'weekly'
		});

		loader.load().then(() => {
			this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
				center: {lat: -34.397, lng: 150.644},
				zoom: 8
			});
		})

	}



}
