export const requestSearch = (query) => ({
  type: 'REQUEST_SEARCH',
  query,
});

export const searchQueryChange = (query) => ({
  type: 'SEARCH_QUERY_CHANGE',
  query,
});
