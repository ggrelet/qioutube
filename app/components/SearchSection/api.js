import axios from 'axios';

export const requestYouTubeSearch = (query) => {
  const YT_API_URL = 'https://www.googleapis.com/youtube/v3/search';
  const YT_API_KEY = 'AIzaSyBK9n2gIMIaT2wZ-zJGIQLq9mF18buFL7Y';

  return axios.get(YT_API_URL, {
    params: {
      q: query,
      part: 'snippet',
      type: 'video',
      videoSyndicated: 'true',
      videoEmbeddable: 'true',
      maxResults: 10,
      key: YT_API_KEY,
    },
  });
};
