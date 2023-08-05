import { BsSearch } from 'react-icons/bs';

import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

import { ButtonIcon, SearchBox } from 'styles/Element.styled';
import { TrackInput } from './TrackInput';

export const TrackBar = ({ onSubmit }) => (
  <SearchBox>
    <SearchForm onSubmit={onSubmit}>
      <TrackInput />
      <ButtonIcon type="submit" aria-label="search button">
        <BsSearch />
      </ButtonIcon>
    </SearchForm>
  </SearchBox>
);
TrackBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
