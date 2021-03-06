import React from 'react';
import PropTypes from 'prop-types';

import VideoList from './components/VideoList';

const SearchSection = (props) => (
  <div className={props.className} >
    <input
      autoFocus
      onChange={(event) => {
        props.searchQueryChange(event.target.value);
        props.requestSearch();
      }}
    />
    {props.isLoading && `Searching "${props.searchQuery}"...`}
    {props.videos.length > 0 && <VideoList videos={props.videos} />}
  </div>
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
