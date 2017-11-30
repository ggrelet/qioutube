import React from 'react';
import PropTypes from 'prop-types';

const SearchSection = (props) => (
  <div className={props.className} >
    <input onChange={(event) => props.searchQueryChange(event.target.value)} />
    <button onClick={() => props.requestSearch()}>Search!</button>
    <br />
    {props.isLoading ? ['Searching ', props.searchQuery] : 'false'}
  </div>
);

SearchSection.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  searchQuery: PropTypes.string,
  requestSearch: PropTypes.func,
  searchQueryChange: PropTypes.func,
};

export default SearchSection;
