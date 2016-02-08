import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Paragraph1Component} from './paragraph1.component'
import {Paragraph2Component} from './paragraph2.component'

@Component({
	template: `
		<div>
			Choose your paragraphs:
			<a [routerLink]="['Paragraph1']">paragraph 1</a>
			<a [routerLink]="['Paragraph2']">paragraph 2</a>
		</div>
		<router-outlet></router-outlet>
	`,
	directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
	{path: '/1', name: 'Paragraph1', component: Paragraph1Component, useAsDefault: true},
	{path: '/2', name: 'Paragraph2', component: Paragraph2Component},
])

export class ParagraphsComponent{}