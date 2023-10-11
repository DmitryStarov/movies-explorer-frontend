import './CardsList.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  MOVIES_PER_PAGE_1280,
  MOVIES_PER_PAGE_320,
  MOVIES_PER_PAGE_768,
} from '../../utils/constants';
import Card from '../Card/Card';

const CardsList = ({ movies, savedMovies, onClick }) => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [perPage, setPerPage] = useState(Number);
  const [step, setStep] = useState(Number);
  const [currentPage, setCurrentPage] = useState(0);
  const { pathname } = useLocation();
  const isSavedMovies = pathname === '/saved-movies';

  const checkWindowSize = () => {
    if (window.innerWidth >= 1280) {
      setPerPage(MOVIES_PER_PAGE_1280);
      setStep(3);
    } else if (window.innerWidth >= 768) {
      setPerPage(MOVIES_PER_PAGE_768);
      setStep(2);
    } else {
      setPerPage(MOVIES_PER_PAGE_320);
      setStep(2);
    }
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleIsSaved = (movie) => {
    if (!isSavedMovies) {
      const savedMovie = savedMovies.find(film => film.movieId === movie.id);
      return savedMovie;
    }
    return true;
  };

  useEffect(() => {
    if (isSavedMovies) {
      setCurrentMovies(movies);
      return;
    }
    checkWindowSize();
    setCurrentMovies(movies.slice(0, perPage + currentPage * step));

    window.addEventListener('resize', () => {
      checkWindowSize();
    });
  }, [perPage, currentPage, movies]);

  useEffect(() => {
    setCurrentPage(0);
  }, [movies]);
  return (
    <section
      className={`card-list ${isSavedMovies ? 'card-list_type_saved-movies' : ''}`}
    >
      {movies.length !== 0
        ? (
          <ul className="card-list__container">
            {currentMovies.map(movie => (
              <Card
                movie={movie}
                key={isSavedMovies ? movie._id : movie.id}
                isSavedMovies={isSavedMovies}
                onClick={onClick}
                isSaved={handleIsSaved(movie)}
              />
            ))}
          </ul>
        )

        : <p className="card-list__title">Ничего не найдено</p>}
      {movies.length > currentPage * perPage
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
