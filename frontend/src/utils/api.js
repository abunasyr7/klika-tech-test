class Api {
    constructor(req) {
        this._headers = req.headers;
        this._url = req.url;
    }

    getAllData() {
        return fetch(`${this._url}/api/allData`, {
            headers: this._headers,
        }).then(this._check);
    }

    _check(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const api = new Api({
    url: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;