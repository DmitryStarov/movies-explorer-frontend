import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import CardsList from '../CardsList/CardsList';
import moviesApi from '../../utils/MoviesApi';
import useMoviesFilter from '../../hooks/useMoviesFilter';

const Movies = ({
  isLoggedIn,
  onDeleteMovie,
  onSaveMovies,
  savedMovies,
}) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { filterMovies, filterShortMovies } = useMoviesFilter();
  const savedCheckbox = JSON.parse(localStorage.getItem('isShortMovie')) ?? false;
  const [isShortMovie, setIsShortMovie] = useState(savedCheckbox);
  const allMovies = JSON.parse(localStorage.getItem('movies')) ?? [];
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterMovies = (movies, req, isShort) => {
    const filteredFilms = filterMovies(movies, req);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredFilms));
    setFilteredMovies(isShort
      ? filterShortMovies(filteredFilms)
      : filteredFilms);
  };

  const handleSearchMovies = async (request, isShort) => {
    setIsLoading(true);
    if (!allMovies.length) {
      try {
        const movies = await moviesApi.getInitialMovies();
        localStorage.setItem('movies', JSON.stringify(movies));
        handleFilterMovies(movies, request, isShort);
      } catch (err) {
        console.log(`Error: ${err}`);
        setIsLoading(false);
      }
    } else {
      handleFilterMovies(allMovies, request, isShort);
    }
    localStorage.setItem('request', request);
    localStorage.setItem('isShortMovie', isShort);
    setIsLoading(false);
  };

  const handleClickMovie = (movie) => {
    const savedMovie = savedMovies.find(savedFilm => savedFilm.movieId === movie.id);
    if (savedMovie) {
      onDeleteMovie(savedMovie._id);
      return;
    }
    onSaveMovies(movie);
  };

  const handleCheckbox = () => {
    setIsShortMovie(!isShortMovie);
    localStorage.setItem('isShortMovie', JSON.stringify(!isShortMovie));
  };

  useEffect(() => {
    setIsLoading(true);
    const defaultMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    if (defaultMovies) {
      if (defaultMovies.length !== 0) {
        setIsShortMovie(JSON.parse(localStorage.getItem('isShortMovie')));
        setFilteredMovies(isShortMovie
          ? filterShortMovies(defaultMovies)
          : defaultMovies);
      }
    }
    setIsLoading(false);
  }, [isShortMovie]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          onSubmit={handleSearchMovies}
          onChange={handleCheckbox}
          isShortMovie={isShortMovie}
        />
        {isLoading
          ? <Preloader />
          : (
            <CardsList
              movies={filteredMovies}
              onClick={handleClickMovie}
              savedMovies={savedMovies}
            />
          )}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
