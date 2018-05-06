import { connect } from 'react-redux';
import PlaySection from './PlaySection.style';

const mapStateToProps = (state) => ({
  videoId: (state.playingVideo.videoId),
});

const PlaySectionContainer = connect(mapStateToProps)(PlaySection);

export default PlaySectionContainer;
