const initialVideoState = {
  id: 'RHU4nXddLNU',
};

const playerReducer = (videoState = initialVideoState, action) => {
  switch (action.type) {
    case 'DISPLAY_VIDEO':
      return videoState;
    default:
      return videoState;
  }
};

export default playerReducer;
