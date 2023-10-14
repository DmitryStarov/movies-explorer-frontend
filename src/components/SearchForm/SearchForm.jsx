import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useValidator from '../../hooks/useValidator';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({ onSubmit, onChange, isShortMovie }) => {
  const {
    inputValues, errors, handleChange, isValid, setInputValues,
  } = useValidator();
  const { pathname } = useLocation();
  const isSavedMovies = pathname === '/saved-movies';

  const handleSearch = (evt) => {
    evt.preventDefault();
    onSubmit(inputValues.search, isShortMovie);
  };

  useEffect(() => {
    if (!isSavedMovies) {
      const savedSearch = localStorage.getItem('request');
      if (savedSearch) setInputValues({ search: savedSearch });
    }
  }, []);
  return (
  // здест div по совету валидатора, т.к. нет заголовков 2-6 уровня
    <div className="search-form">
      <form className="search-form__form" name="search" onSubmit={handleSearch} noValidate>
        <div className="search-form__search-bar">
          <input
            className={`search-form__input ${errors.search ? 'search-form__input_type_error' : ''}`}
            type="text"
            name="search"
            placeholder="Фильм"
            autoComplete="off"
            required
            value={inputValues.search ?? ''}
            onChange={handleChange}
          />
          <button
            className="search-form__submit-button button-hover"
            type="submit"
            aria-label="Поиск"
            disabled={!isValid}
          />
        </div>
        <FilterCheckbox onChange={onChange} value={isShortMovie} />
        <span className="search-form__error">
          {/* из-за такой записи лезет Warning. Разобраться как исправить */}
          {errors.search}
        </span>
      </form>
    </div>
  );
};

export default SearchForm;
