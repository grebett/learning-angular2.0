import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
	selector: '[myHighlight]',
	host: {
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()'
	}
})

export class HighlightDirective{
	@Input('myHighlight') highlightColor: string;
	@Input() set message(m: string) {
		this._message = m;
	}

	private _defaultColor = 'cyan';
	private _message: string;
	
	constructor(private el: ElementRef) {
	}
	
	onMouseEnter() {
		this._highlight(this.highlightColor || this._defaultColor);
		console.log(this._message);
	}
	
	onMouseLeave() {
		this._highlight(null);
	}
	
	private _highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}