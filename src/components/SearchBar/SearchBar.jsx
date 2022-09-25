import PropTypes from 'prop-types';
import {
  SearchBox,
  SearchBtn,
  SearchInput,
  SearchWrapper,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim();

    onSubmit(searchQuery);

    e.currentTarget.reset();
  };

  return (
    <SearchWrapper>
      <SearchBox onSubmit={e => handleSubmit(e)}>
        <SearchInput type="text" name="search" autoComplete="off" />
        <SearchBtn type="submit"></SearchBtn>
      </SearchBox>
    </SearchWrapper>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
