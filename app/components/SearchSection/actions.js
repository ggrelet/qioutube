export const requestSearch = () => ({
  type: 'REQUEST_SEARCH',
});

export const requestSearchSuccess = (items) => ({
  type: 'REQUEST_SEARCH_SUCCESS',
  items,
});

export const searchQueryChange = (query) => ({
  type: 'SEARCH_QUERY_CHANGE',
  query,
});
