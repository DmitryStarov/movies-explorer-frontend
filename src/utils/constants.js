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

export {
  moviesApiSettings,
  mainApiSettings,
  authSettings,
  MOVIES_PER_PAGE_1280,
  MOVIES_PER_PAGE_768,
  MOVIES_PER_PAGE_320,
};
