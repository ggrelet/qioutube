import { connect } from 'react-redux';
import VideoItem from './VideoItem.style';

const mapStateToProps = (state) => ({
  video: state.search.videos,
});

const VideoItemContainer = connect(mapStateToProps)(VideoItem);

export default VideoItemContainer;
