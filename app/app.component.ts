import {Component} from 'angular2/core';
import {FormComponent} from './form.component';

@Component({
	selector: 'my-app',
	templateUrl: './app/templates/app.component.html',
	styleUrls: ['./app/styles/app.component.css'],
	directives: [FormComponent]
})

export class AppComponent {
	title = 'Welcome to my super page!';
}