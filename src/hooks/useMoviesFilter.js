import { SHORT_FILM_DURATION } from '../utils/constants';

const useMoviesFilter = () => {
  const filterShortMovies = movie => movie
    .filter(({ duration }) => duration <= SHORT_FILM_DURATION);

  const filterMovies = (movies, req, isShort) => {
    const searchedMovies = movies
      .filter(({
        nameRU,
        nameEN,
      }) => nameRU.toLowerCase()
        .includes(req.toLowerCase())
        || nameEN.toLowerCase()
          .includes(req.toLowerCase()));
    if (isShort) {
      return filterShortMovies(searchedMovies);
    }
    return searchedMovies;
  };

  return { filterMovies, filterShortMovies };
};

export default useMoviesFilter;
