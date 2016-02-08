import {Component} from 'angular2/core';
import {UnlessDirective} from './unless.directive';

@Component({
	selector: 'my-app',
	templateUrl: './app/templates/app.component.html',
	styleUrls: ['./app/styles/app.component.css'],
	directives: [UnlessDirective]
})

export class AppComponent {
	public n: number = 0;
}