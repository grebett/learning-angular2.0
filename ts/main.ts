interface Point {
	x: number;
	y: number;
}


var makePoint = function(): { x: number, y: number } {
	return {x: 1, y: -1}
}

var f: { (): Point; }; // interface with bare fn signature
var g: () => Point; // classic fn type

f = makePoint // ok
g = f // ok too