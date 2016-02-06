import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	templateUrl: './app/templates/app.component.html',
	styleUrls: ['./app/styles/app.component.css']
})

export class AppComponent {
	public value: number = 42
	switchy() {
		switch (this.value) {
			case 42:
				return "Ah, the question...";
				break;
			case 0:
				return "...noitseuq eht, hA";
				break;
			default:
				return "Please enter 42 or 24!";
		}
	}
}