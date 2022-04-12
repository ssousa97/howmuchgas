import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
	selector: 'maps',
	templateUrl: './maps.component.html',
	styleUrls: ['./maps.component.scss']
})
export class MapsComponent {

	constructor(private mapService: MapsService) { }

	ngAfterViewInit() {
		this.mapService.loadMap(document.getElementById('map') as HTMLElement);
	}

}
