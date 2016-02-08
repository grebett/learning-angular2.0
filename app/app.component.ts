import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
	selector: 'my-app',
	templateUrl: './app/templates/app.component.html',
	styleUrls: ['./app/styles/app.component.css'],
	directives: [HighlightDirective]
})

export class AppComponent {
}