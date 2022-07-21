class ApiCall {
	constructor() {
		this.api = 'https://my-json-server.typicode.com/Squdward/json/'
	}

	async get(url) {
		const request = await fetch(`${this.api}${url}`);
		const data = await request.json();
		return data
	}
}

const Api = new ApiCall();
export default Api