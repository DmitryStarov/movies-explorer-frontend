import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import CardsList from '../CardsList/CardsList';

const Movies = ({ movies }) => (
  <>
    <Header isLoggedIn="true" />
    <main>
      <SearchForm />
      <CardsList movies={movies} />
    </main>
    <Footer />
  </>

);

export default Movies;
