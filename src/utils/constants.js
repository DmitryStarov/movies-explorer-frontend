const moviesApiSettings = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};
const MOVIES_PER_PAGE_1280 = 12;
const MOVIES_PER_PAGE_768 = 8;
const MOVIES_PER_PAGE_320 = 5;

export {
  moviesApiSettings, MOVIES_PER_PAGE_1280, MOVIES_PER_PAGE_768, MOVIES_PER_PAGE_320,
};
