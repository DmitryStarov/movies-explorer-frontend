import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Main.css';

const Main = ({ isLoggedIn }) => (
  <>
    <Header isLoggedIn={isLoggedIn} />

    <Footer />
  </>
);

export default Main;
