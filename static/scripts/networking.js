async function get_api_data() {
	response = await fetch("/api/foo");
	return response.json();
}

async function import_python_module(module_name) {
	//Fetch data
	response = await fetch("/module/" + module_name);

	//Handle whether the request was successful
	if(response.ok) {
		//Return data given
		return response.json();
	} else {
		//Throw an error
		throw new Error("Unable to get module.");
	}
}