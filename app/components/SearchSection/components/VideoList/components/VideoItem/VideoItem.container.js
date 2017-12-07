import { connect } from 'react-redux';
import { playVideo } from 'components/Player/actions';
import VideoItem from './VideoItem.style';

const mapDispatchToProps = {
  playVideo,
};

const VideoItemContainer = connect(undefined, mapDispatchToProps)(VideoItem);

export default VideoItemContainer;
