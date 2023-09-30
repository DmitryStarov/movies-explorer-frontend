/* eslint-disable no-unused-vars */
import { mainApiSettings } from './constants';

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // проверка статуса ответа от сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(this._checkResponse);
  }

  getUserInfo() {
    this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return this._request('/users/me', {
      headers: this._headers,
    });
  }

  patchProfile({ name, email }) {
    return this._request('/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  getSavedMovies() {
    this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return this._request('/movies', {
      method: 'GET',
      headers: this._headers,
    });
  }

  postSavedMovie(movie) {
    return this._request(this._moviesEndpoint, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }),
    });
  }

  deleteSavedMovie(movieId) {
    return this._request(`${this._moviesEndpoint}/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }
}
const mainApi = new MainApi(mainApiSettings);
export default mainApi;
