const initialSearchState = {
  isLoading: false,
  query: '',
  videos: [],
};

const searchReducer = (searchState = initialSearchState, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH':
      return { ...searchState, isLoading: true };
    case 'SEARCH_QUERY_CHANGE':
      return { ...searchState, query: action.query };
    case 'REQUEST_SEARCH_SUCCESS':
      return { ...searchState, videos: action.videos, isLoading: false };
    default:
      return searchState;
  }
};

export default searchReducer;
