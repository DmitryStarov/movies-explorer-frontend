const moviesApiSettings = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

const mainApiSettings = {
  baseUrl: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
};

const authSettings = {
  baseUrl: 'https://api.starov.nomoreparties.co',
  headers: { 'Content-Type': 'application/json' },
};

const MOVIES_PER_PAGE_1280 = 12;
const MOVIES_PER_PAGE_768 = 8;
const MOVIES_PER_PAGE_320 = 5;

const OK_STATUS = 200;
const CREATED_STATUS = 201;
const BAD_REQUEST_STATUS = 400;
const UNAUTH_STATUS = 401;
const FORBIDDEN_STATUS = 403;
const NOT_FOUND_STATUS = 404;
const INTERNAL_SERVER_STATUS = 500;
const CONFLICT_STATUS = 409;

const AUTH_ERR_MESSAGE = 'Необходимо авторизироваться';
const INVALID_AUTH_DATA_ERROR_MESSAGE = 'Неправильный логин или пароль.';

export {
  moviesApiSettings,
  mainApiSettings,
  authSettings,
  MOVIES_PER_PAGE_1280,
  MOVIES_PER_PAGE_768,
  MOVIES_PER_PAGE_320,
  OK_STATUS,
  CREATED_STATUS,
  BAD_REQUEST_STATUS,
  UNAUTH_STATUS,
  FORBIDDEN_STATUS,
  NOT_FOUND_STATUS,
  INTERNAL_SERVER_STATUS,
  CONFLICT_STATUS,
  AUTH_ERR_MESSAGE,
  INVALID_AUTH_DATA_ERROR_MESSAGE,
};
