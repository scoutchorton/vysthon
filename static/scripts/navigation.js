import {NameError} from "./errors.js";
import {PyModule} from "./internal.js";
import {importPythonModule} from "./networking.js";

/*
 * Register event listeners for accelerators
 */

//Get all menu items with accelerators
const menuItems = document.querySelectorAll("#nav [accelerator]");

//Add click event listeners to each element
for(const element of menuItems) {
	element.addEventListener("click", e => {
		//Get and call accelerator
		const accelerator = e.target.getAttribute("accelerator");
		
		if(accelerator in accelerators)
			accelerators[accelerator]();
		else
			console.warn(`No accelerator has been defined for ${accelerator}`);
	});
}

/*
 * Accelerators 
 */

//Create accelerator proxy
let accelerators = new Proxy({}, {
	deleteProperty: (target, prop) => {
		delete target[prop];
	},
	get: (target, prop) => {
		return target[prop];
	},
	has: (target, prop) => {
		return target[prop] != undefined;
	},
	set: (target, prop, value) => {
		if(target[prop] != undefined)
			throw new NameError(`${prop} already exists`);
		else if(!(value instanceof Function))
			throw new TypeError(`${prop} expects to be a Function, instead got ${value.constructor.name}`);

		return target[prop] = value;
	}
});

accelerators.import_module = async () => {
	//Prompt and do basic processing
	const name = prompt("Module to import:");
	if(name == null || name == "") return

	//Get module and construct into class
	const module_data = await importPythonModule(name);
	console.log(new PyModule(module_data));
};