import {Component, OnInit} from "angular2/core";
import {RouteParams} from 'angular2/router';

@Component({
	template: "This is pageX: {{page}}"
})

export class PageXComponent implements OnInit {
	public page: number

	constructor(
		private _routeParams: RouteParams
	) { }
	
	ngOnInit() {
		let page = this._routeParams.get("page");
		console.log(page);
		this.page = parseInt(page);
	}
}