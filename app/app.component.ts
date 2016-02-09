import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ResourceService} from './resource.service';

@Component({
	selector: 'my-app',
	templateUrl: './app/templates/app.component.html',
	styleUrls: ['./app/styles/app.component.css'],
	providers: [ResourceService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
	resources: any[];
	createdResource: any;

	errorMessage: string;
	
	constructor(private _resourceService: ResourceService) {
	}
	
	ngOnInit() {
		this.getResource();
		this.postResource();
	}

	getResource() {
		this._resourceService.getResource()
			.subscribe(
				resource => this.resources = resource,
				error => this.errorMessage = error
			);
	}
	
	postResource() {
		this._resourceService.createResource({"title": "hey there!"})
			.subscribe(
				resource => this.createdResource = resource,
				error => this.errorMessage = error
			)
	}
}