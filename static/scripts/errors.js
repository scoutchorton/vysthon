export class NameError extends Error {
	constructor(msg) {
		super(msg);
		this.name = "NameError";
	}
}