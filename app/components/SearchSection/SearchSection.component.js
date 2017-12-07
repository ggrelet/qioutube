import React from 'react';
import PropTypes from 'prop-types';

import VideoList from './components/VideoList';

const SearchSection = (props) => (
  <form className={props.className} >
    <input autoFocus onChange={(event) => props.searchQueryChange(event.target.value)} />
    <button type="submit" onClick={(event) => { event.preventDefault(); props.requestSearch(); }}>
      Search!
    </button>
    <br />
    {props.isLoading && `Searching "${props.searchQuery}"...`}
    {props.videos.length > 0 && <VideoList videos={props.videos} />}
  </form>
);

SearchSection.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  searchQuery: PropTypes.string,
  requestSearch: PropTypes.func,
  searchQueryChange: PropTypes.func,
  videos: PropTypes.array,
};

export default SearchSection;
