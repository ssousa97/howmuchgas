import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

	calculatorForm!: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {

		const realNumbersRegex = '^[1-9]*[0-9]*[.]?[0-9]*';
		const naturalNumbersRegex = '^[1-9][0-9]*$'

		this.calculatorForm = this.formBuilder.group({
			origin : [null, Validators.required],
			destination: [null, Validators.required],
			pricePerLitre : [null, [Validators.required, Validators.pattern(realNumbersRegex)]], 
			occupants : [null, [Validators.required, Validators.pattern(naturalNumbersRegex)]] 
		})
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
		
		
	}



}
