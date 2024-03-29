class ApiCall {
    constructor() {
        // this.api = 'https://my-json-server.typicode.com/Squdward/json/'
        this.api = "http://localhost:3001/"
    }

    token = window.localStorage.getItem("token")

    async get(url) {
        const request = await fetch(`${this.api}${url}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        })
        const data = await request.json()
        return data
    }

    async update(url, requestBody) {
        const request = await fetch(`${this.api}${url}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        })
        const data = await request.json()
        return data
    }

    async delete(url) {
        const request = await fetch(`${this.api}${url}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await request.json()
        return data
    }

    async post(url, body) {
        const request = await fetch(`${this.api}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        })
        const data = await request.json()
        return data
    }
}

const Api = new ApiCall()
export default Api
