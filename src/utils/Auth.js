import { authSettings } from './constants';

class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(this._checkResponse);
  }

  // регистраци
  registration({ email, password, name }) {
    return this._request('/signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name }),
    });
  }

  // автороизация
  autirization({ email, password }) {
    return this._request('/signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        } return null;
      });
  }

  // проверка токена
  checkToken(token) {
    return this._request('/users/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

const auth = new Auth(authSettings);
export default auth;
