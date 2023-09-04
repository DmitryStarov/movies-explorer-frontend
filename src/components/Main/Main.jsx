import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import './Main.css';

const Main = ({ isLoggedIn }) => (
  <>
    <Header isLoggedIn={isLoggedIn} />
    <main>
      <Promo />
      <AboutProject />
      <Techs />
    </main>
    <Footer />
  </>
);

export default Main;
