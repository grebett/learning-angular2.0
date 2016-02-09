import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class ResourceService {
	private url: string;

	constructor(private http: Http) {
		this.url = 'http://www.json-generator.com/api/json/get/cgsfeKmQgO?indent=2';
	}

	getResource() {
		return this.http.get(this.url)
						.map(res => res.json().data)
						.do(data => console.log(data))
						.catch(this.handleError);
	}
	
	createResource(data: any) {
		let body = JSON.stringify(data);
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		
		return this.http.post('http://jsonplaceholder.typicode.com/posts', body, options)
			.map(res => res.json())
			.do(data => console.log(data))
			.catch(this.handleError)
	}
	
	handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
