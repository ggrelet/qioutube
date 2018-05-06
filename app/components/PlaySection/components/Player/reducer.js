const initialPlayingVideoState = {
  videoId: '',
};

const playingVideoReducer = (playingVideoState = initialPlayingVideoState, action) => {
  switch (action.type) {
    case 'PLAY_VIDEO':
      return { ...playingVideoState, videoId: action.videoId };
    default:
      return playingVideoState;
  }
};

export default playingVideoReducer;
