import { useEffect, useState } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import CardList from '../CardsList/CardsList';
import useMoviesFilter from '../../hooks/useMoviesFilter';

const Movies = ({ savedMovies, isLoggedIn, onDeleteMovie }) => {
  const [isShortMovie, setIsShortMovie] = useState(false);
  const { filterMovies } = useMoviesFilter();
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [requestText, setRequestText] = useState('');

  useEffect(() => {
    if (savedMovies) {
      const filteredFilms = filterMovies(savedMovies, requestText, isShortMovie);
      if (filteredFilms.length === 0) {
        setMessage('ничего не найдено');
      }
      setFilteredMovies(filteredFilms);
      return;
    }
    setMessage('хреновый запрос');
  }, [isShortMovie, requestText, savedMovies]);

  const handleDeleteMovie = ({ _id: movieId }) => {
    onDeleteMovie(movieId);
  };

  const handleSearchMovies = async (request, isShort) => {
    if (savedMovies) {
      setMessage('');
      setRequestText(request);
      setFilteredMovies(filterMovies(savedMovies, request, isShort));
    }
  };
  const handleCheckbox = () => {
    if (savedMovies) {
      setIsShortMovie(!isShortMovie);
    }
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          onSubmit={handleSearchMovies}
          onChange={handleCheckbox}
          isShortMovie={isShortMovie}
        />
        <CardList movies={filteredMovies} messageText={message} onClick={handleDeleteMovie} />
      </main>
      <Footer />
    </>

  );
};

export default Movies;
