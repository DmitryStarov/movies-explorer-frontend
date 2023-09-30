import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import CardList from '../CardsList/CardsList';

const Movies = ({ movies }) => (
  <>
    <Header isLoggedIn="true" />
    <main>
      <SearchForm />
      <CardList movies={movies} isSavedMovies />
    </main>
    <Footer />
  </>

);

export default Movies;
