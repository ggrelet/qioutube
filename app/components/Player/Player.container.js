import { connect } from 'react-redux';
import Player from './Player.style';

const mapStateToProps = (state) => ({
  id: (state.search.videos && state.search.videos[0] && state.search.videos[0].id.videoId),
});

const PlayerContainer = connect(mapStateToProps)(Player);

export default PlayerContainer;
