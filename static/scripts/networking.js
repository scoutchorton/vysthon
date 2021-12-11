async function get_api_data() {
	response = await fetch("/api/foo");
	return response.json();
}