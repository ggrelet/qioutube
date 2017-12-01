import { connect } from 'react-redux';
import Player from './Player.style';
import { displayVideo } from './actions';

const mapStateToProps = (state) => ({
  id: state.video.id,
});

const mapDispatchToProps = {
  displayVideo,
};

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default PlayerContainer;
