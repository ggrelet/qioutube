const initialSearchState = {
  isLoading: false,
  query: '',
};

const searchReducer = (searchState = initialSearchState, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH':
      return { ...searchState, isLoading: true };
    case 'SEARCH_QUERY_CHANGE':
      return { ...searchState, query: action.query };
    default:
      return searchState;
  }
};

export default searchReducer;
