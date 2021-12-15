export class PyModule {
	constructor(module_data) {
		console.log("Creating a module...", module_data);
		for(const name in module_data) {
			console.log(`Name: ${name} Type: ${module_data[name]}`);
		}
	}
}

//Initalize data
window.modules = {};