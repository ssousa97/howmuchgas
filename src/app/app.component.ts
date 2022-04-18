import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MapsService } from './maps/maps.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private mapsService: MapsService){}

	ngOnInit(){
		this.mapsService.loadMap(document.getElementById('map') as HTMLElement);		
	}

}
