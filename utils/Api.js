const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({ baseUrl, token }) {
        this._baseUrl = baseUrl;
        this._token = `Bearer ${token}`;
    }
    getPostList() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: {
                authorization: this._token,
            }
        }).then(onResponce)
    }
    changeLikeStatust(postId, isLike) {
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                authorization: this._token,
            }
        }).then(onResponce)
    }
    deleteUser(postId) {
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            }
        }).then(onResponce)
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token,
            }
        }).then(onResponce)
    }
    
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjAiLCJpYXQiOjE2NDcwMTM4ODUsImV4cCI6MTY3ODU0OTg4NX0.JuPhEHkPxf0RNoN9tAB2oH27rizPL3_8TWGFvbXD4zM',
}

const api = new Api(config);
export default api;