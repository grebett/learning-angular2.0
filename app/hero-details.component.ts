import {Component} from "angular2/core";
import {Hero} from "./hero.ts";

@Component({
	selector: "my-hero-details",
	template: `
		<div *ngIf="hero">
			You have selected: {{hero.name}}
		</div>
	`,
	inputs: ["hero"]
})

export class HeroDetailsComponent {
	public hero: Hero;	
}