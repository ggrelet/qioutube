import { connect } from 'react-redux';
import Player from './Player.style';

const mapStateToProps = (state) => ({
  id: state.search.items && state.search.items[0] && state.search.items[0].id.videoId,
});

const PlayerContainer = connect(mapStateToProps)(Player);

export default PlayerContainer;
