import styled from 'styled-components';
import VideoItem from './VideoItem.component';


const StyledVideoItem = styled(VideoItem)`
  img {
    display: inline;
    vertical-align: middle;
    margin: 5px 20px 5px 0;
  }

  .video-title {
    color: blue;
  }

  cursor: pointer;


  &:hover {
    background-color: #ffecaf;
  }

`;

export default StyledVideoItem;
