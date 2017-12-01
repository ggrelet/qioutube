import React from 'react';
import PropTypes from 'prop-types';

const videoIdToUrl = (id) => (
  `https://www.youtube.com/embed/${id}`
  // 'https://www.youtube.com/embed/' + id;
);

const Player = (props) => (
  <div className={props.className} >
    <h1>
      {props.id}
    </h1>
    <iframe title="Ma vidéo" src={videoIdToUrl(props.id)}></iframe>
  </div>
);

Player.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Player;
