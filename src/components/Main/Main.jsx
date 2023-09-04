import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import './Main.css';

const Main = ({ isLoggedIn }) => (
  <>
    <Header isLoggedIn={isLoggedIn} />
    <main>
      <Promo />
    </main>
    <Footer />
  </>
);

export default Main;
