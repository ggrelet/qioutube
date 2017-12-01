export const requestSearch = () => ({
  type: 'REQUEST_SEARCH',
});

export const searchQueryChange = (query) => ({
  type: 'SEARCH_QUERY_CHANGE',
  query,
});
