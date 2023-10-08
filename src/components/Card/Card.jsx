import './Card.css';
import { useState } from 'react';

const MoviesCard = ({
  movie,
  isSavedMovies,
}) => {
  const {
    duration,
    trailerLink,
    image,
    nameRU,
  } = movie;

  const [buttonText, setButtontext] = useState('Сохранить');
  const movieImage = isSavedMovies ? image : `https://api.nomoreparties.co/${image.url}`;

  const handleClick = (evt) => {
    evt.target.classList.toggle('card__save-button_active');
    if (buttonText === '') { setButtontext('Сохранить'); } else { setButtontext(''); }
  };

  function convertDuration() {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className="card">
      {isSavedMovies
        ? (
          <button
            className="card__delete-button button-hover"
            type="button"
            aria-label="Сохранить"
          />
        )
        : (
          <button
            className="card__save-button button-hover"
            type="button"
            aria-label="Сохранить"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        )}
      <a href={trailerLink} className="card__link" target="_blank" rel="noreferrer">
        <img
          className="card__image"
          src={movieImage}
          alt={nameRU}
        />
      </a>
      <div className={`card__description ${isSavedMovies ? 'card__description_type_saved-movies' : ''}`}>
        <h2 className="card__title">{nameRU}</h2>
        <p className="card__subtitle">{convertDuration()}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
