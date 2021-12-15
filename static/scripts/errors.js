export class NameError extends Error {
	constructor(msg) {
		super(msg);
		self.name = "NameError";
	}
}