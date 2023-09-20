import './CardsList.css';
import { useEffect, useState } from 'react';
import {
  MOVIES_PER_PAGE_1280,
  MOVIES_PER_PAGE_320,
  MOVIES_PER_PAGE_768,
  testMovies,
} from '../../utils/constants';
import Card from '../Card/Card';

const CardsList = ({ movies, isSavedMovies }) => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [perPage, setPerPage] = useState(Number);
  const [currentPage, setCurrentPage] = useState(1);

  const checkWindowSize = () => {
    if (window.innerWidth >= 1280) {
      setPerPage(MOVIES_PER_PAGE_1280);
    } else if (window.innerWidth >= 768) {
      setPerPage(MOVIES_PER_PAGE_768);
    } else {
      setPerPage(MOVIES_PER_PAGE_320);
    }
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (isSavedMovies) {
      setCurrentMovies(movies);
      return;
    }
    checkWindowSize();
    setCurrentMovies(movies.slice(0, currentPage * perPage));

    window.addEventListener('resize', () => {
      checkWindowSize();
    });
  }, [perPage, currentPage]);

  return (
    <section
      className={`card-list ${isSavedMovies ? 'card-list_type_saved-movies' : ''}`}
    >
      {testMovies.length !== 0
        ? (
          <div className="card-list__container">
            {currentMovies.map(movie => (
              <Card movie={movie} key={movie.movieId} isSavedMovies={isSavedMovies} />))}
          </div>
        )

        : <p className="card-list__title">Ничего не найдено</p>}
      {testMovies.length > currentPage * perPage
        && !isSavedMovies
        && (
          <button
            className="card-list__button button-hover"
            type="button"
            onClick={loadMore}
          >
            Ещё
          </button>
        )}
    </section>
  );
};

export default CardsList;