
function operation(name: string, n1: number, n2: number, fn: (n1: number, n2: number) => number): number {
	console.log("Executing operation: ", name);
	return fn(n1, n2);
}

function multiply(n1: number, n2: number): number {
	return n1 * n2;
}

console.log(operation("multiply", 12, 12, multiply));