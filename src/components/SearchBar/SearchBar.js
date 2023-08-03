import { BsSearch } from 'react-icons/bs';

import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

import SearchInput from './SearchInput';
import { ButtonIcon, SearchBox } from 'styles/Element.styled';

export const SearchBar = ({ onSubmit }) => (
  <SearchBox>
    <SearchForm onSubmit={onSubmit}>
      <SearchInput />
      <ButtonIcon type="submit" aria-label="search button">
        <BsSearch />
      </ButtonIcon>
    </SearchForm>
  </SearchBox>
);
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
