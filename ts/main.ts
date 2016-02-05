interface Point {
	x: number;
	y: number;
}

function getX(p: Point): number {
	return p.x;
}

class Point3D {
	x: number;
	y: number;
	z: number;
	
	constructor(x: number, y: number, z: number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

var point = new Point3D(1, 2, 3)

console.log(getX(point))