import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';

const Main = ({ isLoggedIn }) => (
  <>
    <Header isLoggedIn={isLoggedIn} />
    <main>
      <Promo />
      <AboutProject />
    </main>
    <Footer />
  </>
);

export default Main;
