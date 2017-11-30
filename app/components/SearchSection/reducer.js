const initialSearchState = { isLoading: false };

const searchReducer = (searchState = initialSearchState, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH':
      return { ...searchState, isLoading: true };
    default:
      return searchState;
  }
};

export default searchReducer;
