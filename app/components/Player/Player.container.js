import { connect } from 'react-redux';
import Player from './Player.style';

const mapStateToProps = (state) => ({
  videoId: (state.playingVideo.videoId),
});

const PlayerContainer = connect(mapStateToProps)(Player);

export default PlayerContainer;
