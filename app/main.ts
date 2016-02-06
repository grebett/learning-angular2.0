import {bootstrap} from "angular2/platform/browser"
import {AppComponent} from "./app.component"
import {ROUTER_PROVIDERS} from 'angular2/router'; // ROUTER_PROVIDERS is a const exposed from the angular2 router

bootstrap(AppComponent, [ROUTER_PROVIDERS]) // it contains, well, as expected, a list of providers mandatory to use the router