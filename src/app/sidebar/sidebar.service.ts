import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MapsService } from "../maps/maps.service";

@Injectable({
    providedIn: 'root'
})
export class SidebarService{

    constructor(private mapsService: MapsService){}

    createAutocompleteField(inputElement: HTMLInputElement, targetForm: FormGroup){
        this.mapsService.isMapLoaded().subscribe(loaded => {
            if(loaded){
                const options = {
					fields : ['formatted_address', 'geometry', 'name'],
					strictBounds: false,
					types: ['establishment']
				};
		
				const autocomplete = new google.maps.places.Autocomplete(inputElement, options);
							
				autocomplete.bindTo('bounds', this.mapsService.getMap());	

				autocomplete.addListener("place_changed", ()=>{
					targetForm.get(inputElement.id)?.setValue(autocomplete.getPlace().name);
				});
            }
        });
    }

    calculateRoute(origin: string, destination: string){
        return this.mapsService.setDirections(origin, destination);
    }
}