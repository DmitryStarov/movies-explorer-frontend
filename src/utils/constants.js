const moviesApiSettings = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

const mainApiSettings = {
  baseUrl: 'https://api.dstarov.nomoreparties.co',
  // baseUrl: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
};

const authSettings = {
  baseUrl: 'https://api.dstarov.nomoreparties.co',
  // baseUrl: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
};

const MOVIES_PER_PAGE_1280 = { initial: 12, step: 3, breakPoint: 1280 };
const MOVIES_PER_PAGE_768 = { initial: 8, step: 2, breakPoint: 768 };
const MOVIES_PER_PAGE_320 = { initial: 5, step: 2, breakPoint: 320 };

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
const UPDATE_USER_MESSAGE = 'Данные успешно обновлены.';

const BUTTON_REG_TEXT = 'Зарегистрироваться';
const BUTTON_REG_BLOCKED_TEXT = 'Регистрация...';
const BUTTON_SAVE_TEXT = 'Сохранить';
const BUTTON_SAVE_BLOCKED_TEXT = 'Сохранение...';
const BUTTON_AUTH_TEXT = 'Войти';
const BUTTON_AUTH_BLOCKED_TEXT = 'Вход...';

const SHORT_FILM_DURATION = 40;
const EMAIL_REG = '^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';
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
  UPDATE_USER_MESSAGE,
  EMAIL_REG,
  BUTTON_REG_TEXT,
  BUTTON_REG_BLOCKED_TEXT,
  BUTTON_SAVE_TEXT,
  BUTTON_SAVE_BLOCKED_TEXT,
  BUTTON_AUTH_TEXT,
  BUTTON_AUTH_BLOCKED_TEXT,
};
