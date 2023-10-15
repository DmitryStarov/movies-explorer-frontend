const moviesApiSettings = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

const mainApiSettings = {
  baseUrl: 'api.dstarov.nomoreparties.co',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
};

const authSettings = {
  baseUrl: 'api.dstarov.nomoreparties.co',
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
const CONFLICT_EMAIL_MESSAGE = 'Этот email уже зарегестрирован';
const INVALID_REG_DATA_MESSAGE = 'Переданы некорректные данные при регистрации';
const REG_ERROR_MESSAGE = 'При регистрации произошла ошибка.';
const UPDATE_USER_ERROR_MESSAGE = 'При обновлении профиля произошла ошибка.';
const SEARCH_ERROR_MESSAGE = 'При выполнении запроса произошла ошибка.';
const NOT_FOUND_MESSAGE = 'Ничего не найдено';

const SHORT_FILM_DURATION = 40;
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
  CONFLICT_EMAIL_MESSAGE,
  INVALID_REG_DATA_MESSAGE,
  REG_ERROR_MESSAGE,
  UPDATE_USER_ERROR_MESSAGE,
  SHORT_FILM_DURATION,
  SEARCH_ERROR_MESSAGE,
  NOT_FOUND_MESSAGE,
};
