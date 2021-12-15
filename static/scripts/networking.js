/*
async function getAPIData() {
	response = await fetch("/api/foo");
	return response.json();
}
*/

export async function importPythonModule(module_name) {
	//Fetch data
	const response = await fetch("/module/" + module_name);

	//Handle whether the request was successful
	if(response.ok) {
		//Return data given
		return response.json();
	} else {
		//Throw an error
		throw new Error("Unable to get module.");
	}
}