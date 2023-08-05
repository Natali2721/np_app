import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { ButtonIcon, SearchBox } from 'styles/Element.styled';
import SearchForm from 'components/TrackBar/SearchForm';
import { SearchInput } from './SearchInput';

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
