import './Card.css';
import { useState } from 'react';
// import imageError from '../../assets/images/no-photo.svg';

const MoviesCard = ({
  movie: {
    duration, trailerLink, image, nameRU,
  },
  isSavedMovies,
}) => {
  const [isImageError, setIsImageError] = useState(false);
  const [buttonText, setButtontext] = useState('Сохранить');

  const handleClick = (evt) => {
    evt.target.classList.toggle('card__save-button_active');
    if (buttonText === '') { setButtontext('Сохранить'); } else { setButtontext(''); }
  };

  function convertDuration() {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return `${hours}ч ${minutes}м`;
  }

  const handleImageError = () => {
    setIsImageError(true);
  };

  return (
    <article className="card">
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
          className={`card__image ${isImageError ? 'card__image_type_error' : ''}`}
          src={image}
          alt={nameRU}
          onError={handleImageError}
        />
      </a>
      <div className={`card__description ${isSavedMovies ? 'card__description_type_saved-movies' : ''}`}>
        <h2 className="card__title">{nameRU}</h2>
        <p className="card__subtitle">{convertDuration()}</p>
      </div>
    </article>
  );
};

export default MoviesCard;
