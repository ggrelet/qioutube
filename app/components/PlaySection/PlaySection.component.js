import React from 'react';
import PropTypes from 'prop-types';

import Player from './components/Player';


const PlaySection = (props) => (
  <div className={props.className} >
    <Player videoId={props.videoId} />
  </div>
);

PlaySection.propTypes = {
  className: PropTypes.string,
  videoId: PropTypes.string,
};

export default PlaySection;
