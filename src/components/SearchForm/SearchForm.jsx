import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => (
  // здест div по совету валидатора, т.к. нет заголовков 2-6 уровня
  <div className="search-form">
    <form className="search-form__form" name="search">
      <div className="search-form__search-bar">
        <input
          className="search-form__input"
          type="text"
          name="search"
          placeholder="Фильм"
          autoComplete="off"
          required
        />
        <button
          className="search-form__submit-button button-hover"
          type="submit"
          aria-label="Поиск"
        />
      </div>
      <FilterCheckbox />
    </form>
  </div>
);

export default SearchForm;
