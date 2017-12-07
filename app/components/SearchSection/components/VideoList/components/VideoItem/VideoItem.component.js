import React from 'react';
import PropTypes from 'prop-types';


const VideoItem = (props) => (
  <div onClick={() => props.playVideo(props.video.id.videoId)} className={props.className}>
    <img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.default.url} />
    <span className="video-title">
      {props.video.snippet.title}
    </span>
  </div>
);

VideoItem.propTypes = {
  className: PropTypes.string,
  video: PropTypes.object,
  playVideo: PropTypes.func,
};

export default VideoItem;
