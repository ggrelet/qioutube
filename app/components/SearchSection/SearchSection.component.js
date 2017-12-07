import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from 'components/VideoItem';

const SearchSection = (props) => (
  <form className={props.className} >
    <input onChange={(event) => props.searchQueryChange(event.target.value)} />
    <button type="submit" onClick={(event) => { event.preventDefault(); props.requestSearch(); }}>
      Search!
    </button>
    <br />
    {props.isLoading && `Searching "${props.searchQuery}"...`}
    {props.videos.map((video) => (<VideoItem key={video.id.videoId} video={video} />))}
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
