import './AboutMe.css';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import studentPhoto from '../../image/student.jpg';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => (
  <section className="about-me" id="about-me">
    <SectionTitle title="Студент" />
    <div className="about-me__info">
      <div className="about-me__description">
        <h3 className="about-me__title">Дмитрий</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 35 лет</p>
        <p className="about-me__text">
          Я родился и живу в Улан-Удэ, закончил ВСГТУ по специальности
          Математическое обеспеченине и адимнистрирование информационных систем.
        </p>
        <ul className="about-me__links">
          <li>
            <Link
              className="about-me__link link-hover"
              to="https://github.com/DmitryStarov"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
      <img
        className="about-me__photo"
        src={studentPhoto}
        alt="Дмитрий"
      />
    </div>
    <Portfolio />
  </section>
);

export default AboutMe;
