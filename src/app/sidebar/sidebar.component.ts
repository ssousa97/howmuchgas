import { Component, ElementRef, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapsService } from '../maps/maps.service';
import { SidebarService } from './sidebar.service';

@Component({
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

	@ViewChild('originInput') originInput!: ElementRef<HTMLInputElement>;
	@ViewChild('destinationInput') destinationInput!: ElementRef<HTMLInputElement>;
	
	calculatorForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private sidebarService: SidebarService
	) { }

	ngOnInit(){

		const realNumbersRegex = '^[1-9]*[0-9]*[.]?[0-9]*';
		const naturalNumbersRegex = '^[1-9][0-9]*$'

		this.calculatorForm = this.formBuilder.group({
			origin : [null, Validators.required],
			destination: [null, Validators.required],
			pricePerLitre : [null, [Validators.required, Validators.pattern(realNumbersRegex)]], 
			occupants : [null, [Validators.required, Validators.pattern(naturalNumbersRegex)]] 
		});
	}

	ngAfterViewInit() {

		this.sidebarService.createAutocompleteField(this.originInput.nativeElement, this.calculatorForm);
		this.sidebarService.createAutocompleteField(this.destinationInput.nativeElement, this.calculatorForm);
	}

	applyErrorCss(field: string){

		if(this.verifyErrors(field))
			return 'invalid-input';
		else
			return '';
		
	}

	verifyErrors(field: string){

		return !this.calculatorForm.get(field)?.valid && this.calculatorForm.get(field)?.touched;
	}

	onSubmit() {
		
		this.sidebarService.calculateRoute(
			this.calculatorForm.get('origin')?.value,
		 	this.calculatorForm.get('destination')?.value
		);
		
		
	}



}
