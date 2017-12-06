import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

// const videoIdToUrl = (id) => (
//   `https://www.youtube.com/embed/${id}`
//   // 'https://www.youtube.com/embed/' + id;
// );

const Player = (props) => (
  <div className={props.className} >
    <h1>
      {props.id}
    </h1>
    <YouTube videoId={props.id} />
  </div>
);

Player.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Player;
