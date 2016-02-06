import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; // ROUTER_DIRECTIVES is an array of directives like RouterOutlet or RouterLink
import {Page1Component} from './page1.component';
import {Page2Component} from './page2.component';

@Component({
	selector: 'my-app',
	templateUrl: './app/templates/app.component.html',
	styleUrls: ['./app/styles/app.component.css'],
	directives: [ROUTER_DIRECTIVES] // we had them to the component's directives property in order to use them in the view
})

// RouteConfig here defines Routes, the most common of RouteDefinitions	
@RouteConfig([
	{ path: '/page1', name: 'Page1', component: Page1Component },
	{ path: '/page2', name: 'Page2', component: Page2Component },
])
	
export class AppComponent {
}