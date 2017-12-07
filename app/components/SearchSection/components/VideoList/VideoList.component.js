import React from 'react';
import PropTypes from 'prop-types';

import VideoItem from './components/VideoItem';

const VideoList = (props) => (
  <div className={props.className}>
    {props.videos.map((video) => (<VideoItem key={video.id.videoId} video={video} />))}
  </div>
);

VideoList.propTypes = {
  className: PropTypes.string,
  videos: PropTypes.array,
};

export default VideoList;
