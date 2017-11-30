import React from 'react';
import PropTypes from 'prop-types';

const SearchSection = (props) => (
  <div className={props.className} >
    <input />
    <button onClick={() => props.requestSearch()}>Search!</button>
    {props.isLoading ? 'Loading...' : 'false'}
  </div>
);

SearchSection.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  requestSearch: PropTypes.func,
};

export default SearchSection;
