import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';

@Component({
	selector: 'my-form',
	templateUrl: './app/templates/form.component.html',
	styleUrls: ['./app/styles/form.component.css']
})

export class FormComponent {
	public credentials = {}

	get diagnostic() {
		return JSON.stringify(this.credentials)
	}
	
	onSubmit() {
		console.log(this.credentials);
	}
}