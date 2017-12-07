import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

// const videoIdToUrl = (id) => (
//   `https://www.youtube.com/embed/${id}`
//   // 'https://www.youtube.com/embed/' + id;
// );

const Player = (props) => (
  <div className={props.className} >
    {props.videoId && <YouTube videoId={props.videoId} />}
  </div>
);

Player.propTypes = {
  className: PropTypes.string,
  videoId: PropTypes.string,
};

export default Player;
